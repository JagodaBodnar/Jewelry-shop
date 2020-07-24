import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import cartIcon from "../../assets/icons/shoppingCartSvg.svg";
import Button from "../../components/reusableComponents/Button";
import RootContext from "../../context/context";
import { GiCutDiamond } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { device } from "../../globalStyles/Device";
import HamburgerMenu from "react-hamburger-menu";
import HamburgerNavigation from "./HamburgerMenu";
import WishlistPopUp from "../../components/wishlist/WishlistPopUp";

const StyledNav = styled.nav`
  position: fixed;
  z-index: 101;
  top: 0;
  width: 100%;
  min-height: 8vh;
  background-color: #fff;
  border-bottom: solid 1px #ececec;
`;

const StyledUl = styled.ul`
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

const StyledLi = styled.li`
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

const StyledLink = styled(Link)`
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

const StyledSpan = styled.span`
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledLogoContainer = styled.div`
  position: absolute;
  left: 45px;
  display: flex;
  color: #ce3c72;
  font-size: 52px;
`;
const StyledAddToWishlist = styled(FaHeart)`
  font-size: 18px;
  color: grey;
  margin-left: 20px;
`;
const StyledHamburgerMenu = styled(HamburgerMenu)`
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
`;
const StyledRoutes = styled.ul`
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

const StyledNavigation = styled.div`
  height: ${({ isOpen }) => (isOpen ? "100px" : "0")};

  @media ${device.laptop} {
    display: none;
  }
`;

const Navbar = () => {
  const context = useContext(RootContext);
  const { cartCounter, handleCartOpen } = context;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledNav>
        <StyledUl>
          <StyledLogoContainer>
            <GiCutDiamond />
          </StyledLogoContainer>
          <StyledRoutes>
            <StyledLi>
              <StyledLink to={routes.home}>Home</StyledLink>
            </StyledLi>

            <StyledLi>
              <StyledLink to={routes.products}>Products</StyledLink>
            </StyledLi>

            <StyledLi>
              <StyledLink to={routes.contact}>Contact</StyledLink>
            </StyledLi>
          </StyledRoutes>
          <StyledLi>
            <StyledHamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color="grey"
              borderRadius={0}
              animationDuration={0.5}
            />

            <Link to={routes.list}>
              <Button wishlist>
                <StyledAddToWishlist></StyledAddToWishlist>
              </Button>
            </Link>
            <Button cartIcon={cartIcon} onClick={handleCartOpen}>
              <StyledSpan>{cartCounter}</StyledSpan>
            </Button>
          </StyledLi>
        </StyledUl>

        <StyledNavigation isOpen={isOpen}>
          {isOpen === true ? <HamburgerNavigation /> : ""}
        </StyledNavigation>
        <WishlistPopUp />
      </StyledNav>
    </>
  );
};

export default Navbar;
