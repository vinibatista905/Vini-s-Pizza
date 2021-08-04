import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Vini's Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
