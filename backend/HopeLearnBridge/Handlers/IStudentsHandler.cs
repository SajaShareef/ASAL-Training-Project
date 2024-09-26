using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public interface IStudentsHandler
    {
        Task<Course> EnrollInCourse(string studentId, string courseId);
    }
}
