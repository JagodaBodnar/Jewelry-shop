import React from "react";
import { routes } from "../../routes";
import { StyledRoutes, StyledLink, StyledLi } from "./HamburgerMenuStyles";

const HamburgerNavigation = () => {
  return (
    <>
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
    </>
  );
};

export default HamburgerNavigation;
