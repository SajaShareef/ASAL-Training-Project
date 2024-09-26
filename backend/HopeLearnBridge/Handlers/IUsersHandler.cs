using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Models.Enums;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public interface IUsersHandler
    {
        Task<User> RegisterAsync(CreateUserRequest createUserRequest);
        Task<(string token, UserRole role)> LoginAsync(LoginRequest loginRequest);
        Task<bool> ResetPasswordAsync(ResetPasswordRequest request, string email);
        Task<bool> ForgotPasswordAsync(string email);
        Task SendPasswordResetEmailAsync(string email, string token);
        Task<bool> ConfirmResetPasswordAsync(string token, string newPassword);
    }
}
