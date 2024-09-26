import { CardCover, CardMeta, StyledCard } from './CourseCard.style';
import {
  CARD_DEFAULT_IMG_TEST_ID,
  CARD_IMG_TEST_ID,
  CARD_TEST_ID,
  CourseCardProps,
} from './CourseCard.const';
import { FC } from 'react';
import DefaultImg from '../../images/book.svg?react';

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  cardImg: CardImg,
  children,
  className,
}) => {
  return (
    <StyledCard
      data-testid={CARD_TEST_ID}
      cover={
        <CardCover>
          {CardImg ? (
            <CardImg className={className} data-testid={CARD_IMG_TEST_ID} />
          ) : (
            <DefaultImg
              className={className}
              data-testid={CARD_DEFAULT_IMG_TEST_ID}
            />
          )}
        </CardCover>
      }
    >
      <CardMeta title={title} description={description} />
      {children}
    </StyledCard>
  );
};

export default CourseCard;
