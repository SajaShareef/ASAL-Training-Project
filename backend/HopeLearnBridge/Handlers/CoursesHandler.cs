using HopeLearnBridge.Models.Request;
using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public class CoursesHandler : ICoursesHandler
    {
        private readonly IDataStorage _dataStorage;

        public CoursesHandler(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
        }

        public async Task<List<Course>> GetCourses()
        {
            return await _dataStorage.GetItemsAsync<Course>(DataStorageConstants.CourseContainerName, c => true);
        }

        public async Task<List<Course>> GetCoursesByTeacherId(string teacherId)
        {
            return await _dataStorage.GetItemsAsync<Course>(DataStorageConstants.CourseContainerName, c => c.UserId == teacherId);
        }

        public async Task<Course> CreateCourse(CreateCourseRequest createCourseRequest ,string teacherId)
        {
            var course = new Course
            {
                id = Guid.NewGuid().ToString(),
                Title = createCourseRequest.Title,
                Description = createCourseRequest.Description,
                UserId = teacherId
            };

            try
            {
                return await _dataStorage.UpsertItemAsync(course, DataStorageConstants.CourseContainerName, course.id);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Error creating new Course record: {ex.Message}", ex);
            }
        }

        public async Task<Course> GetCourse(string id)
        {
            var course = await _dataStorage.ReadItemAsync<Course>(DataStorageConstants.CourseContainerName, id, id);
            if (course == null)
            {
                throw new InvalidOperationException($"Course with id {id} not found");
            }

            return course;
        }
    }
}