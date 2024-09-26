import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileContainer = styled.div`

`;

export const ProfileCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 50%;
    margin-top: 30px;
    margin-left: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
`;

export const ProfileInfo = styled.div`
    text-align: center;
    padding: 20px;
`;

export const ResetButton = styled(Link)`
    background-color: ${({ theme }) => theme.colors.purple_6};
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;

    &:hover{
        background-color: ${({ theme }) => theme.colors.purple_7};
    }
`;