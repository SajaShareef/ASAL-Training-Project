import { render } from '../../utilities/test-utilities';
import Course from './Course';
import { COURSE_DATA_TESTID } from './Course.const';

describe('Course Component', () => {
  test('should render Course component correctly', () => {
    const { getByTestId } = render(<Course />);
    expect(getByTestId(COURSE_DATA_TESTID)).toBeInTheDocument();
  });
});
