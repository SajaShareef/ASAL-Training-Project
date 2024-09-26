import { render} from '../../utilities/test-utilities';
import Profile from './Profile';
import { PROFILE_TEST_ID } from './Profile.const';

describe('profile page', () => {
  test('Should render profile', async () => {
    const{getByTestId}=render(<Profile/>);
      expect(getByTestId(PROFILE_TEST_ID)).toBeInTheDocument();
  });
});