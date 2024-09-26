import { render} from '../../utilities/test-utilities';
import ConfirmPasswordReset from './ConfirmPasswordReset';
import { CONFIRM_PASSWORD_RESET_TEST_ID } from './ConfirmPasswordReset.const';


describe('Confirm password reset page', () => {
  test('Should render Confirm password reset page', async () => {
    const{getByTestId}=render(<ConfirmPasswordReset/>);
      expect(getByTestId(CONFIRM_PASSWORD_RESET_TEST_ID)).toBeInTheDocument();
  });
});