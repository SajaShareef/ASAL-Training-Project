using HopeLearnBridge.Models.Request;
using Microsoft.AspNetCore.Identity;
using HopeLearnBridge.Models.Enums;
using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public class UsersHandler : IUsersHandler
    {
        private readonly PasswordHasher<User> _passwordHasher;
        private readonly IEmailHandler _emailHandler;
        private readonly IDataStorage _dataStorage;
        private readonly IJwtHandler _jwtHandler;
        public UsersHandler(IDataStorage dataStorage, IJwtHandler jwtHandler, IEmailHandler emailService)
        {
            _passwordHasher = new PasswordHasher<User>();
            _emailHandler = emailService;
            _dataStorage = dataStorage;
            _jwtHandler = jwtHandler;

        }

        public async Task<User> RegisterAsync(CreateUserRequest createUserRequest)
        {
            var usersWithSameEmail = await _dataStorage.GetItemsAsync<User>(DataStorageConstants.UserContainerName, user => user.Email == createUserRequest.Email);
            if (usersWithSameEmail.Any())
            {
                throw new InvalidOperationException("User with the same email already exists.");
            }
            if (!Enum.TryParse(createUserRequest.Role, true, out UserRole role))
            {
                throw new ArgumentException("Invalid role specified.");
            }
            if (role == UserRole.Student)
            {
                var student = new Student
                {
                    id = Guid.NewGuid().ToString(),
                    FirstName = createUserRequest.FirstName,
                    LastName = createUserRequest.LastName,
                    Email = createUserRequest.Email,
                    Role = role,
                };
                student.Password = _passwordHasher.HashPassword(student, createUserRequest.Password);

                try
                {
                    await _dataStorage.UpsertItemAsync(student, DataStorageConstants.UserContainerName, student.id);
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException($"Error creating new student: {ex.Message}", ex);
                }

                return student;
            }
            else if (role == UserRole.Teacher)
            {
                var user = new User
                {
                    id = Guid.NewGuid().ToString(),
                    FirstName = createUserRequest.FirstName,
                    LastName = createUserRequest.LastName,
                    Email = createUserRequest.Email,
                    Role = role
                };

                user.Password = _passwordHasher.HashPassword(user, createUserRequest.Password);
                try
                {
                    await _dataStorage.UpsertItemAsync(user, DataStorageConstants.UserContainerName, user.id);
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException($"Error creating new teacher: {ex.Message}", ex);
                }

                return user;
            }
            else
            {
                throw new InvalidOperationException("Unsupported user role.");
            }
        }

        public async Task<(string token, UserRole role)> LoginAsync(LoginRequest loginRequest)
        {
            var users = await _dataStorage.GetItemsAsync<User>(DataStorageConstants.UserContainerName, user => user.Email == loginRequest.Email);
            var user = users.SingleOrDefault() ?? throw new InvalidOperationException("No user found with the provided email.");
            var result = _passwordHasher.VerifyHashedPassword(user, user.Password ?? string.Empty, loginRequest.Password);
            if (result == PasswordVerificationResult.Success)
            {
                var token = _jwtHandler.GenerateToken(user);
                return (token, user.Role);
            }
            throw new InvalidOperationException("Invalid email or password.");
        }

        public async Task<bool> ResetPasswordAsync(ResetPasswordRequest request, string email)
        {
            var users = await _dataStorage.GetItemsAsync<User>(DataStorageConstants.UserContainerName, user => user.Email == email);
            var user = users.SingleOrDefault() ?? throw new InvalidOperationException("No user found with the provided email and ID.");
            var verificationResult = _passwordHasher.VerifyHashedPassword(user, user.Password ?? string.Empty, request.OldPassword);
            if (verificationResult != PasswordVerificationResult.Success)
            {
                throw new InvalidOperationException("Invalid old password.");
            }
            verificationResult = _passwordHasher.VerifyHashedPassword(user, user.Password ?? string.Empty, request.NewPassword);
            if (verificationResult == PasswordVerificationResult.Success)
            {
                throw new InvalidOperationException("New password cannot be the same as the old password.");
            }

            user.Password = _passwordHasher.HashPassword(user, request.NewPassword);
            try
            {
                await _dataStorage.UpsertItemAsync(user, DataStorageConstants.UserContainerName, user.id ?? string.Empty);
                return true;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Error creating new user: {ex.Message}", ex);
            }
        }
        public async Task<bool> ForgotPasswordAsync(string email)
        {
            var users = await _dataStorage.GetItemsAsync<User>(DataStorageConstants.UserContainerName, user => user.Email == email);
            var user = users.SingleOrDefault() ?? throw new InvalidOperationException("No user found with the provided email.");
            var resetToken = Guid.NewGuid().ToString();
            var tokenExpiration = DateTime.UtcNow.AddMinutes(2);
            user.ResetToken = resetToken;
            user.TokenExpiration = tokenExpiration;

            try
            {
                await _dataStorage.UpsertItemAsync(user, DataStorageConstants.UserContainerName, user.id ?? string.Empty);
                await SendPasswordResetEmailAsync(user.Email ?? string.Empty, resetToken);
                return true;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Error sending password reset email: {ex.Message}", ex);
            }
        }

        public async Task SendPasswordResetEmailAsync(string email, string resetToken)
        {
            var resetLink = $"https://localhost:5173/confirm-password-reset?token={resetToken}";
            var message = $"Please use the following link to reset your password: {resetLink}";
            try
            {
                await _emailHandler.SendEmailAsync(email, "Password Reset Request", message);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Error sending email: {ex.Message}", ex);
            }
        }

        public async Task<bool> ConfirmResetPasswordAsync(string resetToken, string newPassword)
        {
            var users = await _dataStorage.GetItemsAsync<User>(DataStorageConstants.UserContainerName, user => user.ResetToken == resetToken);
            var user = users.SingleOrDefault() ?? throw new InvalidOperationException("Invalid token.");
            if (user.TokenExpiration < DateTime.UtcNow)
            {
                throw new InvalidOperationException("Reset token has expired.");
            }

            user.Password = _passwordHasher.HashPassword(user, newPassword);
            user.ResetToken = null;
            user.TokenExpiration = null;
            try
            {
                await _dataStorage.UpsertItemAsync(user, DataStorageConstants.UserContainerName, user.id ?? string.Empty);
                return true;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Error updating password: {ex.Message}", ex);
            }
        }
    }
}