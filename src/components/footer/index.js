import React from 'react';
import {FaInstagram, FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa'

import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMediaWrapper,
  SocialMediaLogo,
  SocialMediaIconWrapper,
  SocialMediaContainer,
  SocialMediaIconLink,
  FooterCopyright
} from './FooterElements';

const FooterSection = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle to="#">About Us</FooterLinkTitle>
                <FooterLink to="#">How it works</FooterLink>
                <FooterLink to="#">Testimonials</FooterLink>
                <FooterLink to="#">Careers</FooterLink>
                <FooterLink to="#">Investors</FooterLink>
                <FooterLink to="#">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle to="#">Videos</FooterLinkTitle>
                <FooterLink to="#">Submit Video</FooterLink>
                <FooterLink to="#">Ambassadors</FooterLink>
                <FooterLink to="#">Agency</FooterLink>
                <FooterLink to="#">Influencer</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle to="#">Contact Us</FooterLinkTitle>
                <FooterLink to="#">Contact</FooterLink>
                <FooterLink to="#">Support</FooterLink>
                <FooterLink to="#">Destinations</FooterLink>
                <FooterLink to="#">Sponsorships</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle to="#">Social Media</FooterLinkTitle>
                <FooterLink to="#">Instagram</FooterLink>
                <FooterLink to="#">Facebook</FooterLink>
                <FooterLink to="#">Youtube</FooterLink>
                <FooterLink to="#">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMediaContainer>
            <SocialMediaWrapper>
              <SocialMediaLogo to="#">Zyx Bank</SocialMediaLogo>
              <SocialMediaIconWrapper>
                <SocialMediaIconLink href="#" target="_blank" aria-label="Instagra"><FaInstagram /></SocialMediaIconLink>
                <SocialMediaIconLink href="#" target="_blank" aria-label="Facebook"><FaFacebook /></SocialMediaIconLink>
                <SocialMediaIconLink href="#" target="_blank" aria-label="Youtube"><FaYoutube /></SocialMediaIconLink>
                <SocialMediaIconLink href="#" target="_blank" aria-label="Twitter"><FaTwitter /></SocialMediaIconLink>
              </SocialMediaIconWrapper>
            </SocialMediaWrapper>
          </SocialMediaContainer>
          <FooterCopyright>Zyx Bank © 2020. All rights reserved.</FooterCopyright>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default FooterSection;
