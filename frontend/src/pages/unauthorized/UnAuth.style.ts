import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UnAuthorizedContainer = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UnAuthorizedImgContainer = styled.div`
    width: 40%;
`;

export const BackButton = styled(Link)`
    background-color: ${({ theme }) => theme.colors. purple_4};
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
`;

