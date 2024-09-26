import { CourseContainer } from './Course.style';
import { COURSE_DATA_TESTID } from './Course.const';

const Course = () => {
  return (
    <CourseContainer data-testid={COURSE_DATA_TESTID}>
      View Courses
    </CourseContainer>
  );
};

export default Course;