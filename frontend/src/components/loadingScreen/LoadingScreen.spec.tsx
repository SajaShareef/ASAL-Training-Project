import { render} from '../../utilities/test-utilities';
import LoadingScreen from './LoadingScreen';
import { LOADING_SCREEN_TEST_ID } from './LoadingScreen.const';

describe('Loading screen Component', () => {
  test('Should render Loading screen component correctly', async () => {
    const{getByTestId}=render(<LoadingScreen />);
    expect(getByTestId(LOADING_SCREEN_TEST_ID)).toBeInTheDocument();
  });
});