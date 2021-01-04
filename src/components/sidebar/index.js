import React from 'react'
import {
  SidebarContainer, 
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
  SidebarRoute
} from './SidebarElement';

const Sidebar = ({isOpen, toggleIsOpen}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
        <Icon onClick={toggleIsOpen}>
          <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggleIsOpen} smooth={true} duration={500} spy={true} exact="true" offset={-70}>About</SidebarLink>
            <SidebarLink to="discover" onClick={toggleIsOpen} smooth={true} duration={500} spy={true} exact="true" offset={-70}>Discover</SidebarLink>
            <SidebarLink to="services" onClick={toggleIsOpen} smooth={true} duration={500} spy={true} exact="true" offset={-70}>Services</SidebarLink>
            <SidebarLink to="signup" onClick={toggleIsOpen} smooth={true} duration={500} spy={true} exact="true" offset={-70}>Sign Up</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrapper>
            <SidebarRoute to="/zyx-bank-website/signin">Sign In</SidebarRoute>
          </SidebarBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;
