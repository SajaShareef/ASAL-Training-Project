import { Col, Row } from 'antd';
import styled from 'styled-components';

export const SignupContainer = styled(Row)`
  height: 100vh;
`;

export const RightColumn = styled(Col)`
  background-color: ${({ theme }) => theme.colors.purple_1};
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftColumn = styled(Col)``;

export const ImgContainer = styled.div`
  width: 80%;
`;