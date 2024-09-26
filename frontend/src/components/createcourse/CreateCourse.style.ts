import { Button, Form } from 'antd';
import styled from 'styled-components';

export const CreateCourseContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledForm: typeof Form = styled(Form)`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 80%;
    padding: 25px;
    border-radius: 5px;
`;

export const Label =  styled(Form.Item)`
    .ant-form-item-label > label{
        font-size: 16px;
        font-weight: bold;
        color: ${({theme})=>theme.colors.purple_7};
    }
`;

export const CreateCourseHeader = styled.h2`
    padding-top: 50px;
    color: ${({theme})=>theme.colors.purple_6};
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
`;

export const StyledButton = styled(Button)`
    background-color: ${({theme})=>theme.colors.purple_6};
    color: ${({theme})=>theme.colors.white};
    border:none;
    padding: 10px 25px;
    &:hover {
    background-color: ${({theme})=>theme.colors.purple_7} !important;
    border: none;
    color: ${({theme})=>theme.colors.white} !important;
    }
`;