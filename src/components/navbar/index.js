import React from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLink, 
  NavBtn, 
  NavBtnLink
} from './NavbarElement';

const Navbar = ({toggleIsOpen}) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/zyx-bank-website" onClick={scrollToTop}>Zyx Bank</NavLogo>
          <MobileIcon onClick={toggleIsOpen}>
            <FaBars></FaBars>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-70}>Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services" smooth={true} duration={500} spy={true} exact="true" offset={-70}>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-70}>Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/zyx-bank-website/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
