import { Spin } from 'antd';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Loading = styled(Spin)`
    .ant-spin-dot-item{
        background-color: ${({theme})=>theme.colors.purple_7};
    }
`;