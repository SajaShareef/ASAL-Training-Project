import { waitFor } from '@testing-library/react';
import { render} from '../../utilities/test-utilities';
import Navbar from './Navbar';
import { NAVBAR_TEST_ID } from './Navbar.const';

describe('Navbar Component', () => {
  test('Should render Navbar component correctly', async () => {
    const{getByTestId}=render(<Navbar />);
    await waitFor(() => {
      expect(getByTestId(NAVBAR_TEST_ID)).toBeInTheDocument();    });
  });
});