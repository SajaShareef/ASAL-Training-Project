import { Button, Pagination } from 'antd';
import styled from 'styled-components';

export const ViewCoursesContainer=  styled.div`
`;

export const CoursesContainer=  styled.div`
    width:80%;
    margin:auto;
    margin-top: 10px;
`;

export const StyledPagination = styled(Pagination)`
    display:'flex';
    justify-content: center;
    margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green_6};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_7} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red_6};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red_7} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

export const EnrollButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.purple_4};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple_7} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;
