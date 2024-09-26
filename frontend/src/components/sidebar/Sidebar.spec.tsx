import {waitFor } from '@testing-library/react';
import { render} from '../../utilities/test-utilities';
import Sidebar from './Sidebar';
import { SIDEBAR_DATA_TESTID } from './Sidebar.const';

describe('Sidebar Component', () => {
  test('should render sidebar', async () => {
    const{getByTestId}=render(<Sidebar items={[]} />);
    await waitFor(() => {
      expect(getByTestId(SIDEBAR_DATA_TESTID)).toBeInTheDocument();
    });
  });
});