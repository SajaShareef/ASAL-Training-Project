namespace HopeLearnBridge.Models
{
    public class Student : User
    {
        public HashSet<String> CoursesIds {get;} = new HashSet<string>();
    }
}