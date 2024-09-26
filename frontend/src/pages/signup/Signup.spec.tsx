import { render} from '../../utilities/test-utilities';
import Signup from './Signup';
import { SIGN_UP_TEST_ID } from './Signup.const';

describe('Signup page', () => {
  test('Should render sign up page', async () => {
    const{getByTestId}=render(<Signup/>);
      expect(getByTestId(SIGN_UP_TEST_ID)).toBeInTheDocument();
  });
});