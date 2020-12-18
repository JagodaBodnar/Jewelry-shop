import React from "react";
import { routes } from "../../routes";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import {
  StyledCopyrightsContainer,
  StyledFooterContainer,
  StyledFooterNav,
  StyledSocialMediaContainer,
  StyledSocialMediaLinks,
  StyledLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <StyledCopyrightsContainer>
          <AiOutlineCopyright /> <p>2020 Jagoda Bodnar</p>
        </StyledCopyrightsContainer>
        <StyledFooterNav>
          <StyledLink to={routes.home}>Home</StyledLink>
          <StyledLink to={routes.products}>Products</StyledLink>
          <StyledLink to={routes.contact}>Contact</StyledLink>
        </StyledFooterNav>
        <StyledSocialMediaContainer>
          <StyledSocialMediaLinks href="http://facebook.com" target="_blank">
            {" "}
            <FaFacebookSquare />
          </StyledSocialMediaLinks>
          <StyledSocialMediaLinks href="http://instagram.com" target="_blank">
            {" "}
            <FaInstagramSquare />
          </StyledSocialMediaLinks>
          <StyledSocialMediaLinks href="http://twitter.com" target="_blank">
            {" "}
            <FaTwitterSquare />
          </StyledSocialMediaLinks>
          <StyledSocialMediaLinks href="http://youtube.com" target="_blank">
            {" "}
            <FaYoutubeSquare />
          </StyledSocialMediaLinks>
        </StyledSocialMediaContainer>
      </StyledFooterContainer>
    </>
  );
};

export default Footer;
