using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public interface ICoursesHandler
    {
        Task<List<Course>> GetCourses();
        Task<Course> CreateCourse(CreateCourseRequest createCourseRequest, string teacherId);
        Task<Course> GetCourse(string id);
        Task<List<Course>> GetCoursesByTeacherId(string teacherId);
    }
}
