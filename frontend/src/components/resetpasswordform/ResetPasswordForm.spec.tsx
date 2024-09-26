import { render} from '../../utilities/test-utilities';
import ResetPasswordForm from './ResetPasswordForm';
import { RESET_PASSWORD_FORM_TEST_ID } from './ResetPasswordForm.const';

describe('Reset Password Form Component', () => {
  test('Should render reset password form component', () => {
      const{getByTestId}=render(<ResetPasswordForm/>);
      expect(getByTestId(RESET_PASSWORD_FORM_TEST_ID)).toBeInTheDocument();
  });
});