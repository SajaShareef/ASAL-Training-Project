import { render} from '../../utilities/test-utilities';
import { SIGN_UP_FORM_TEST_ID } from './Signup.const';
import SignupForm from './SignupForm';

describe('Signup form Component', () => {
  test('Should render sign up form component', async () => {
    const{getByTestId}=render(<SignupForm/>);
      expect(getByTestId(SIGN_UP_FORM_TEST_ID)).toBeInTheDocument();
  });
});