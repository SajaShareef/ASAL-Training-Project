import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainPageContainer = styled.div`
    background-color: ${({theme})=>theme.colors.purple_1};
    height:100vh;
`;

export const MainPageContent = styled.div`
    width: 70%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    gap:20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

`;

export const MainPageTitle = styled.h1`
    color: ${({theme})=>theme.colors.purple_7};
    font-size: 48px;
`;

export const MainPageDescription = styled.p`
    line-height: 2;
`;

export const MainPageImgContainer = styled.div`
    width: 80%;
`;

export const SignupButton = styled(Link)`
    color:${({theme})=>theme.colors.purple_1};
    background-color: ${({theme})=>theme.colors.purple_4};
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    width: 25%;

    &:hover{
        color:${({theme})=>theme.colors.purple_1};
        background-color: ${({theme})=>theme.colors.purple_7};

    }
`;