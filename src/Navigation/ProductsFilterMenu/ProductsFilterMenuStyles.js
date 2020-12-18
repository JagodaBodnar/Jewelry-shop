import styled, { css } from "styled-components";
import { device } from "../../globalStyles/Device";

export const AnimatedNavbarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.navyBlue};
  padding: 5px;
  width: 100%;
  @media ${device.mobileS} {
    height: 450px;
  }
`;

export const StyledCategoriesContainer = styled.div`
  @media ${device.mobileS} {
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobile} {
    width: 80vw;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    width: 80vw;
  }
  @media ${device.desktop} {
    width: 60vw;
  }
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  margin: 20px auto;
`;

export const StyledCategories = styled.ul`
  list-style: none;
  margin-bottom: 15px;
`;

export const StyledCategoryItem = styled.li`
  cursor: pointer;
  font-family: "Scope One", serif;
  color: ${({ theme }) => theme.mint};
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 5px;
  padding-right: 5px;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
  ${({ selectedCategory }) =>
    selectedCategory &&
    css`
      margin-bottom: 0;
      color: grey;
      margin-right: 10px;
      &:hover {
        color: grey;
      }
    `}
`;
export const StyledSearchInput = styled.input`
  outline: none;
  color: #051c26;
  font-family: "Scope One", serif;
  border-radius: 2px;
  padding: 4px;
  border: 1px solid #fff;
`;
export const StyledForm = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media ${device.mobileS} {
    grid-column: span 2;
  }
  @media ${device.mobile} {
    grid-column: span 2;
  }
  @media ${device.laptop} {
    grid-column: span 1;
  }
`;
export const StyledSelectedCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  align-items: start;

  @media ${device.mobileS} {
    grid-column: span 3;
    flex-direction: column;
  }
  @media ${device.mobile} {
    grid-column: span 1;
  }
  @media ${device.laptop} {
    grid-column: span 2;
  }
`;
export const StyledSelectedCategoryElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 2px;
  padding: 2px;
  border-radius: 2px;
  position: relative;
`;
