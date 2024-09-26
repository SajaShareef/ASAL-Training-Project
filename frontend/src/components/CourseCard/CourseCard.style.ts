import { Card } from 'antd';
import styled from 'styled-components';

const {Meta} = Card;

export const StyledCard = styled(Card)`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grey_2};
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_4};
  }

  .ant-card-body {
    padding: 10px;
    flex-grow: 1;
  }
  .card-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const CardCover = styled.div`
  padding: 10px;
`;

export const CardMeta = styled(Meta)`
  height: 50px;
`;