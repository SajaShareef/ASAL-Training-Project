using System.Threading.Tasks;

namespace HopeLearnBridge.Handlers
{
    public interface IEmailHandler
    {
        Task SendEmailAsync(string recipientEmail, string subject, string message);
    }
}
