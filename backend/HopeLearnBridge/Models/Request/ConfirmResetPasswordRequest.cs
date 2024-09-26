namespace HopeLearnBridge.Models.Request
{
    public record ConfirmResetPasswordRequest(string Token, string NewPassword);
}
