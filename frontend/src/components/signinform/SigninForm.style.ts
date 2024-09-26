import { Button, Form } from 'antd';
import styled from 'styled-components';

export const SigninFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  color: ${({ theme }) => theme.colors.purple_6};
`;

export const SigninStyledForm: typeof Form = styled(Form)`
    width:60%;
`;

export const SigninTitle = styled.div`
  margin-bottom: 30px;
  font-size: 48px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const Label = styled(Form.Item)`
  .ant-form-item-label > label {
    font-size: 12px;
    font-weight: bold;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
`;

export const SignInButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple_6};
  color: ${({ theme }) => theme.colors.white};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;