import { render } from '../../utilities/test-utilities';
import CourseCard from './CourseCard';
import { CARD_DEFAULT_IMG_TEST_ID, CARD_IMG_TEST_ID} from './CourseCard.const';
import Book from '../../images/book.svg?react';

describe('CourseCard Component', () => {
  test('Should renders CardImg when cardImg prop is provided', () => {
    const { getByTestId, queryByTestId} = render(
      <CourseCard title="Test Title" description="Test Description" cardImg={Book}/>
    );
    expect( getByTestId(CARD_IMG_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(CARD_DEFAULT_IMG_TEST_ID)).not.toBeInTheDocument();
  });

  test('Should render DefaultImg when cardImg prop is not provided', () => {
    const { getByTestId, queryByTestId} = render(
      <CourseCard title="Test Title" description="Test Description"/>
    );
    expect(getByTestId(CARD_DEFAULT_IMG_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(CARD_IMG_TEST_ID)).not.toBeInTheDocument();
  });
});