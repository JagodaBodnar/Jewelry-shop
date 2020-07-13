import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { device } from "../../globalStyles/Device";

const StyledFooterContainer = styled.div`
  bottom: 0;
  height: 10vh;
  border-top: solid 1px #ececec;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Scope One", serif;
  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const StyledCopyrightsContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px 0;
`;
const StyledFooterNav = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px 0;
`;
const StyledSocialMediaContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 25px;
  color: ${({ theme }) => theme.grey};
  cursor: pointer;
`;
const StyledSocialMediaLinks = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.grey};
  &:hover {
    color: ${({ theme }) => theme.pink};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #828281;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 0.5s;
`;

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
