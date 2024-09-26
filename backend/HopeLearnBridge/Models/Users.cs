using HopeLearnBridge.Models.Enums;
namespace HopeLearnBridge.Models
{
    public class User
    {
        public string? id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public UserRole Role { get; set; }
        public string? ResetToken { get; set; }
        public DateTime? TokenExpiration { get; set; }
    }
}
