import { render} from '../../utilities/test-utilities';
import MainPage from './MainPage';
import { MAIN_PAGE_TEST_ID } from './MainPage.const';

describe('Main page', () => {
  test('Should render Main page correctly', async () => {
    const{getByTestId}=render(<MainPage />);
    expect(getByTestId(MAIN_PAGE_TEST_ID)).toBeInTheDocument();
  });
});