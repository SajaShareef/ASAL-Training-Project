using Microsoft.AspNetCore.Authorization;
using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;
using HopeLearnBridge.Models;
using System.Security.Claims;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ICoursesHandler _coursesHandler;

        public CoursesController(ICoursesHandler coursesHandler)
        {
            _coursesHandler = coursesHandler;
        }

        [HttpGet("getCourses")]
        [Authorize]
        public async Task<ActionResult<List<Course>>> GetCourses()
        {
            var userRole = User.FindFirst(ClaimTypes.Role)?.Value;
            var userId = User.FindFirst("Id")?.Value;
            if (userRole == "Teacher")
            {
                return await _coursesHandler.GetCoursesByTeacherId(userId ?? string.Empty);
            }
            else if (userRole == "Student")
            {
                return await _coursesHandler.GetCourses();
            }
            else
            {
                return Forbid("Unauthorized access.");
            }
        }

        [HttpPost("createCourse")]
        [Authorize(Roles = "Teacher")]
        public async Task<ActionResult<Course>> CreateCourse(CreateCourseRequest createCourseRequest)
        {
            var teacherId = User.FindFirst("Id")?.Value;
            var course = await _coursesHandler.CreateCourse(createCourseRequest, teacherId ?? string.Empty);
            return CreatedAtAction(nameof(GetCourse), new { id = course.id }, course);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(string id)
        {
            return await _coursesHandler.GetCourse(id);
        }
    }
}
