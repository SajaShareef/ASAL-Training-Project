using Microsoft.AspNetCore.Authorization;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;
using HopeLearnBridge.Models;
using System.Security.Claims;
using HopeLearnBridge.Models.Request;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentsHandler _studentsHandler;

        public StudentsController(IStudentsHandler studentsHandler)
        {
            _studentsHandler = studentsHandler;
        }

        [HttpPost("enrollInCourse")]
        [Authorize(Roles = "Student")]
        public async Task<ActionResult<Course>> EnrollInCourse(EnrollCourseRequest enrollCourseRequest)
        {
            try
            {
                var studentId = User.FindFirst("Id")?.Value;
                return await _studentsHandler.EnrollInCourse(studentId ?? string.Empty, enrollCourseRequest.CourseId);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
