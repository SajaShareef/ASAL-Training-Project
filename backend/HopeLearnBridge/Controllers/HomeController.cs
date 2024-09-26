using Microsoft.AspNetCore.Mvc;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
       

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public string Get()
        {
            return string.Empty;
        }
    }
}
