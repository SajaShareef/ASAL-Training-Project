using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using HopeLearnBridge.Models;
using System.Text;

namespace HopeLearnBridge.Handlers
{
    public class JwtHandler : IJwtHandler
    {
        private readonly JwtSettings _jwtSettings;

        public JwtHandler(IOptions<JwtSettings> jwtSettings)
        {
            _jwtSettings = jwtSettings.Value;
        }
        public string GenerateToken(User user)
        {
            var key = _jwtSettings.SecretKey != null ? Encoding.UTF8.GetBytes(_jwtSettings.SecretKey) : null;

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("Id", user.id ?? string.Empty),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email  ?? string.Empty),
                    new Claim(ClaimTypes.Role, user.Role.ToString()),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(10),
                Issuer = _jwtSettings.Issuer,
                Audience = _jwtSettings.Audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);
            return jwtToken;
        }
    }
}