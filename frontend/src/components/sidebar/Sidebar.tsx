import { FC } from 'react';
import {
  SIDEBAR_DATA_TESTID,
  SidebarItem,
  SidebarProps,
} from './Sidebar.const';
import {
  MenuContainer,
  SidebarContainer,
  SidebarHeader,
} from './Sidebar.style';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const Sidebar: FC<SidebarProps> = ({ items }) => {
  const navigate = useNavigate();
  const handleLogout = ()=> {
    sessionStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  const commonItems: SidebarItem[] = [
    {
      key: 'profile',
      label: <Link to="profile">Profile</Link>,
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: <Space onClick={handleLogout}>Log out</Space>,
      icon: <LogoutOutlined />,
    },
  ];

  const sidebarItems = [...items, ...commonItems];

  return (
    <SidebarContainer data-testid={SIDEBAR_DATA_TESTID}>
      <SidebarHeader>HopeLearnBridge</SidebarHeader>
      <MenuContainer items={sidebarItems} defaultSelectedKeys={['Courses']} />
    </SidebarContainer>
  );
};

export default Sidebar;
