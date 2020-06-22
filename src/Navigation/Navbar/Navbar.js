import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import cartIcon from "../../assets/icons/shoppingCartSvg.svg";
import Button from "../../components/reusableComponents/Button";
import RootContext from "../../context/context";
import { GiCutDiamond } from "react-icons/gi";

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

const Navbar = () => {
  const context = useContext(RootContext);
  const { cartCounter, handleCartOpen } = context;

  return (
    <StyledNav>
      <StyledUl>
        <StyledLogoContainer>
          <GiCutDiamond />
        </StyledLogoContainer>
        <StyledLi>
          <StyledLink to={routes.home}>Home</StyledLink>
        </StyledLi>

        <StyledLi>
          <StyledLink to={routes.products}>Products</StyledLink>
        </StyledLi>

        <StyledLi>
          <StyledLink to={routes.contact}>Contact</StyledLink>
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
