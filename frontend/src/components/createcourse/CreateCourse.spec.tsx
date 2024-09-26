import CreateCourse from './CreateCourse';
import {render} from '../../utilities/test-utilities';
import { CREATE_COURSE_ID } from './CreateCourse.const';

describe('CreateCourse Component', () => {
  test('renders CreateCourse component correctly', () => {
    const{getByTestId}= render(<CreateCourse />);
    const createCourseElement=getByTestId(CREATE_COURSE_ID);
    expect(createCourseElement).toBeInTheDocument();
  });
});