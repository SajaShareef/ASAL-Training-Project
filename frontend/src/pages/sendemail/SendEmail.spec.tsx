import { render} from '../../utilities/test-utilities';
import SendEmail from './SendEmail';
import { SEND_EMAIL_TEST_ID } from './SendEmail.const';

describe('send email page', () => {
  test('Should render send email page', async () => {
    const{getByTestId}=render(<SendEmail/>);
      expect(getByTestId(SEND_EMAIL_TEST_ID)).toBeInTheDocument();
  });
});