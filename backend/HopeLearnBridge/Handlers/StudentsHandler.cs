using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public class StudentsHandler : IStudentsHandler
    {
        private readonly IDataStorage _dataStorage;

        public StudentsHandler(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
        }
        public async Task<Course> EnrollInCourse(string studentId, string courseId)
        {
            try
            {
                var student = await _dataStorage.ReadItemAsync<Student>(DataStorageConstants.UserContainerName, studentId, studentId) ?? throw new InvalidOperationException($"Student with ID {studentId} not found.");
                var course = await _dataStorage.ReadItemAsync<Course>(DataStorageConstants.CourseContainerName, courseId, courseId) ?? throw new InvalidOperationException($"Course with ID {courseId} not found.");

                if (student?.CoursesIds.Contains(courseId) == true)
                {
                    throw new InvalidOperationException($"Student is already enrolled in the course with ID {courseId}.");
                }
                student?.CoursesIds.Add(courseId);
                await _dataStorage.UpsertItemAsync(student, DataStorageConstants.UserContainerName, studentId);

                return course;
            }
            catch (Exception ex)
            {
                throw new Exception($"An unexpected error occurred during enrollment: {ex.Message}");
            }
        }

    }
}