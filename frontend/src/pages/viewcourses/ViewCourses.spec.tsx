import { render} from '../../utilities/test-utilities';
import ViewCourses from './ViewCourses';
import { VIEW_COURSES_TEST_ID } from './ViewCourses.const';

describe('View courses page', () => {
  test('Should render view vourses  page', async () => {
      const{getByTestId}=render(<ViewCourses/>);
      expect(getByTestId(VIEW_COURSES_TEST_ID)).toBeInTheDocument();
  });
});