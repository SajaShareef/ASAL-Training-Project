import { waitFor } from '@testing-library/react';
import { render} from '../../utilities/test-utilities';
import Student from './Student';
import { STUDENT_PAGE_TEST_ID } from './Student.const';

jest.mock('../../hooks/auth/useAuthCheck/useAuthCheck', () => ({
  useAuthCheck: jest.fn(() => ({
    isAuthenticated: true,
    isAuthorized: true,
    role: 'Student',
  })),
}));

describe('student page', () => {
  test('Should render student in page', async () => {
      const{getByTestId}=render(<Student/>);
      await waitFor(() => {
        expect(getByTestId(STUDENT_PAGE_TEST_ID)).toBeInTheDocument();
      });
  });
});