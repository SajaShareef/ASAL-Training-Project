import { Menu } from 'antd';
import styled from 'styled-components';

export const StyledMenu: typeof Menu = styled(Menu)`
  background-color: transparent;
  border: none;
  padding: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  .ant-menu-item:first-child {
    margin-right: auto;
  }

  .ant-menu-item svg {
    width: 100%;
    height: 30px;
  }

  .ant-menu-item::after {
    border-bottom: none !important;
    content: none;
  }

  .ant-menu-item:hover::after {
    border-bottom: none !important;
  }

  .ant-menu-item:nth-child(2),.ant-menu-item:nth-child(3){
    background-color: ${({theme})=>theme.colors.purple_7};
    margin-right: 10px;
    border-radius: 50px;
    padding: 0px 20px;
    color: ${({theme})=>theme.colors.purple_1};

    &:hover{
      background-color: ${({theme})=>theme.colors.purple_4};
      color: ${({theme})=>theme.colors.purple_7};
    }
  }
`;

export const NavbarLogoContainer = styled.div`
  display:flex;
  align-items: center;
  color: ${({theme})=>theme.colors.purple_7};
  gap:20px;
`;

export const NavbarTitle = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
