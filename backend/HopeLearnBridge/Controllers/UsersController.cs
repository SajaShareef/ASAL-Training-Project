using Microsoft.AspNetCore.Authorization;
using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersHandler _usersHandler;

        public UsersController(IUsersHandler userHandler)
        {
            _usersHandler = userHandler;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(CreateUserRequest createUserRequest)
        {
            try
            {
                var user = await _usersHandler.RegisterAsync(createUserRequest);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(LoginRequest loginRequest)
        {
            try
            {
                var (token, role) = await _usersHandler.LoginAsync(loginRequest);
                return Ok(new { token, role = role.ToString() });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("resetPassword")]
        [Authorize]
        public async Task<IActionResult> ResetPasswordAsync(ResetPasswordRequest request)
        {
            var email = User?.FindFirst(ClaimTypes.Email)?.Value;
            try
            {
                var result = await _usersHandler.ResetPasswordAsync(request, email ?? string.Empty);
                if (result)
                {
                    return Ok(new { Message = "Password updated successfully!" });
                }

                return BadRequest(new { Message = "Error updating password" });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPost("forgotPassword")]
        public async Task<IActionResult> ForgotPasswordAsync(ForgetPasswordRequest request)
        {
            try
            {
                await _usersHandler.ForgotPasswordAsync(request.Email);
                return Ok(new { Message = "Password reset link sent to your email." });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
        
        [HttpPost("confirmResetPassword")]
        public async Task<IActionResult> ConfirmResetPasswordAsync(ConfirmResetPasswordRequest request)
        {
            try
            {
                var result = await _usersHandler.ConfirmResetPasswordAsync(request.Token, request.NewPassword);
                if (result)
                {
                    return Ok(new { Message = "Password has been reset successfully!" });
                }

                return BadRequest(new { Message = "Error resetting password." });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

    }
}