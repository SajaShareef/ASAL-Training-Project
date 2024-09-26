using MailKit.Security;
using MailKit.Net.Smtp;
using MimeKit.Text;
using MimeKit;

namespace HopeLearnBridge.Handlers
{
    public class EmailHandler : IEmailHandler
    {
        private readonly IConfiguration _configuration;

        public EmailHandler(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        public async Task SendEmailAsync(string recipientEmail, string subject, string message)
        {
            var host = _configuration["SmtpSettings:Host"];
            var port = int.Parse(_configuration["SmtpSettings:Port"] ?? "0");
            var username = _configuration["SmtpSettings:Username"];
            var password = _configuration["SmtpSettings:Password"];
            var senderName = _configuration["SmtpSettings:SenderName"];
            var senderEmail = _configuration["SmtpSettings:SenderEmail"];

            var email = new MimeMessage();
            email.From.Add(new MailboxAddress(senderName, senderEmail));
            email.To.Add(new MailboxAddress("", recipientEmail));
            email.Subject = subject;
            email.Body = new TextPart(TextFormat.Plain) { Text = message };

            using var smtp = new SmtpClient();
            await smtp.ConnectAsync(host, port, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(username, password);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }
    }
}
