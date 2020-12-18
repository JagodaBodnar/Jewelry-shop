import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { device } from "../../globalStyles/Device";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  position: fixed;
  z-index: 101;
  top: 0;
  width: 100vw;
  min-height: 8vh;
  background-color: #fff;
  border-bottom: solid 1px #ececec;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Scope One", serif;
  position: relative;
  @media ${device.mobileS} {
    padding: 0;
  }
  @media ${device.mobile} {
    padding: 0;
  }
  @media ${device.tablet} {
    padding: 10px 20px 0 0;
  }
`;

export const StyledLi = styled.li`
  @media ${device.mobileS} {
    width: 150px;
  }
  @media ${device.mobile} {
    width: 150px;
  }
  margin: 0 30px;
  width: 100px;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #828281;
  background-image: linear-gradient(
    ${({ theme }) => theme.pink},
    ${({ theme }) => theme.pink}
  );
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 0.5s;
  &:hover,
  &:focus {
    background-size: 100% 1px;
    color: ${({ theme }) => theme.pink};
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledLogoContainer = styled.div`
  position: absolute;
  left: 45px;
  display: flex;
  color: #ce3c72;
  font-size: 52px;
`;
export const StyledAddToWishlist = styled(FaHeart)`
  font-size: 18px;
  color: grey;
  margin-left: 20px;
`;
export const StyledHamburgerMenu = styled(HamburgerMenu)`
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
`;
export const StyledRoutes = styled.ul`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobile} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
  }
`;

export const StyledNavigation = styled.div`
  height: ${({ isOpen }) => (isOpen ? "100px" : "0")};

  @media ${device.laptop} {
    display: none;
  }
`;
