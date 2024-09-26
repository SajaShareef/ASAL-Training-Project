using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public interface IJwtHandler
    {
        string GenerateToken(User user);
    }
}
