import { render} from '../../utilities/test-utilities';
import SendEmailForm from './SendEmailForm';
import { SEND_EMAIL_FORM_TEST_ID } from './SendEmailForm.const';

describe('Reset Password Form Component', () => {
  test('Should render reset password form component', () => {
      const{getByTestId}=render(<SendEmailForm/>);
      expect(getByTestId(SEND_EMAIL_FORM_TEST_ID)).toBeInTheDocument();
  });
});