import { render } from '../../utilities/test-utilities';
import App from './App';
import { APP_TEST_ID } from './App.const';

describe('App tests',()=>{
    test('renders App component', () => {
        const { getByTestId } = render(<App/>);
        const appElement = getByTestId (APP_TEST_ID);
        expect(appElement).toBeInTheDocument();
});
});