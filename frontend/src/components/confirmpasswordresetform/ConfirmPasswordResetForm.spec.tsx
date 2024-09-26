import { render} from '../../utilities/test-utilities';
import ConfirmPasswordResetForm from './ConfirmPasswordResetForm';
import { CONFIRM_PASSWORD_RESET_FORM_TEST_ID } from './ConfirmPasswordResetForm.const';


describe('Reset Password Form Component', () => {
  test('Should render reset password form component', () => {
      const{getByTestId}=render(<ConfirmPasswordResetForm token=""/>);
      expect(getByTestId(CONFIRM_PASSWORD_RESET_FORM_TEST_ID)).toBeInTheDocument();
  });
});