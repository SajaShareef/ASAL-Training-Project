import { Link } from 'react-router-dom';
import { NavbarLogoContainer, NavbarTitle, StyledMenu } from './Navbar.style';
import NavbarLogo from '../../images/navbar-logo.svg?react';
import { FC } from 'react';
import { NAVBAR_TEST_ID, NavbarItem, NavbarProps } from './Navbar.const';

const Navbar:FC<NavbarProps> = ({className}) => {
  const menuItems:NavbarItem[] = [
    {
      key: 'home',
      label: (
        <Link to="/">
          <NavbarLogoContainer>
            <NavbarLogo />
            <NavbarTitle>HopeLearnBridge</NavbarTitle>
          </NavbarLogoContainer>
        </Link>
      ),
    },
    {
      key: 'sign-up',
      label: <Link to="sign-up">Sign Up</Link>,
    },
    {
      key: 'sign-in',
      label: <Link to="sign-in">Sign In</Link>,
    },
  ];

  return <StyledMenu mode="horizontal" items={menuItems} className={className} data-testid={NAVBAR_TEST_ID}/>;
};

export default Navbar;