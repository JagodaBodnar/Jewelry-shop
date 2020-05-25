import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import cartIcon from "../../assets/icons/shoppingCartSvg.svg";
import Button from "../../components/reusableComponents/Button";
import RootContext from "../../context/context";
import Logo from "../../assets/images/ButterflyLogo.png";

const StyledNav = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  z-index: 101;
  top: 0;
  width: 100%;
  min-height: 8vh;
  background-color: #fff;
  border-bottom: solid 1px #ececec;
  /*background-image: linear-gradient(15deg, #f1f1f1 0%, #fff 100%);*/
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px 0 0;
  font-family: "Scope One", serif;
  position: relative;
`;

const StyledLi = styled.li`
  margin: 0 30px;
  width: 100px;
  transition: 0.5s ease;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #828281;
  background-image: linear-gradient(#ead065, #ead065);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 0.5s;
  &:hover,
  &:focus {
    background-size: 100% 1px;
    color: #ead065;
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
  color: gold;
`;
const StyledLogo = styled.img`
  width: 55px;
  height: auto;
`;

const Navbar = () => {
  const context = useContext(RootContext);
  const { cartCounter, handleCartOpen } = context;

  return (
    <StyledNav>
      <StyledUl>
        <StyledLogoContainer>
          <StyledLogo src={Logo} />
        </StyledLogoContainer>
        <StyledLi>
          <StyledLink to={routes.home}>Home</StyledLink>
        </StyledLi>

        <StyledLi>
          <StyledLink to={routes.about}>About</StyledLink>
        </StyledLi>

        <StyledLi>
          <StyledLink to={routes.products}>Products</StyledLink>
        </StyledLi>
        <StyledLi>
          <Button cartIcon={cartIcon} onClick={handleCartOpen}>
            <StyledSpan>{cartCounter}</StyledSpan>
          </Button>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;
