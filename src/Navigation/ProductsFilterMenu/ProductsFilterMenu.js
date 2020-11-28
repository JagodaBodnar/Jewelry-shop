import React, { useContext } from "react";
import RootContext from "../../context/context";
import styled, { css } from "styled-components";
import Button from "../../components/reusableComponents/Button";
import { HeadingTwo } from "../../components/reusableComponents/Heading.js";
import { BsSearch } from "react-icons/bs";
import closeFilter from "../../assets/icons/closeFilterSvg.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  productsCategories,
  mineral,
  metal,
} from "../../localData/productsCategories";
import { useSpring, animated } from "react-spring";
import { device } from "../../globalStyles/Device";
import { v4 as uuidv4 } from "uuid";

const AnimatedNavbarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.navyBlue};
  padding: 5px;
  width: 100%;
  @media ${device.mobileS} {
    height: 450px;
  }
`;

const StyledCategoriesContainer = styled.div`
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

const StyledCategories = styled.ul`
  list-style: none;
  margin-bottom: 15px;
`;

const StyledCategoryItem = styled.li`
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
const StyledSearchInput = styled.input`
  outline: none;
  color: #051c26;
  font-family: "Scope One", serif;
  border-radius: 2px;
  padding: 4px;
  border: 1px solid #fff;
`;
const StyledForm = styled.form`
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
const StyledSelectedCategoryContainer = styled.div`
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
const StyledSelectedCategoryElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 2px;
  padding: 2px;
  border-radius: 2px;
  position: relative;
`;

const ProductsFilterMenu = ({ isProductMenuVisible }) => {
  const context = useContext(RootContext);
  const screenSizeMobile = useMediaQuery("(max-width:576px)");

  const anim = useSpring({
    config: { duration: 500 },
    height: isProductMenuVisible
      ? screenSizeMobile
        ? "450px"
        : "280px"
      : "0px",
    opacity: isProductMenuVisible ? "1" : "0",
  });

  const {
    resetFilters,
    filterProducts,
    filterProductsBySearchInput,
    removeFilterCategory,
    filterToRemove,
  } = context;

  return (
    <animated.div style={anim}>
      <AnimatedNavbarWrapper>
        <StyledCategoriesContainer>
          <div>
            <HeadingTwo categoryName>Metal</HeadingTwo>
            <StyledCategories onClick={filterProducts}>
              {metal.map((item) => {
                return (
                  <StyledCategoryItem data-target={item} key={uuidv4()}>
                    {item}
                  </StyledCategoryItem>
                );
              })}
            </StyledCategories>
          </div>
          <div>
            <HeadingTwo categoryName>Mineral</HeadingTwo>
            <StyledCategories onClick={filterProducts}>
              {mineral.map((item) => {
                return (
                  <StyledCategoryItem data-target={item} key={uuidv4()}>
                    {item}
                  </StyledCategoryItem>
                );
              })}
            </StyledCategories>
          </div>
          <div>
            <HeadingTwo categoryName>Type</HeadingTwo>
            <StyledCategories onClick={filterProducts}>
              {productsCategories.map((item) => {
                return (
                  <StyledCategoryItem data-target={item} key={uuidv4()}>
                    {item}
                  </StyledCategoryItem>
                );
              })}
            </StyledCategories>
          </div>
          <StyledForm onSubmit={filterProductsBySearchInput}>
            <StyledSearchInput
              type="text"
              name="search"
              placeholder="Search product"
              autoComplete="off"
              required
            />
            <Button search type="submit">
              <BsSearch />
            </Button>
          </StyledForm>
          <Button resetFilter onClick={resetFilters}>
            Reset Filters
          </Button>
          <StyledSelectedCategoryContainer>
            {filterToRemove.map((item) => {
              return (
                <StyledSelectedCategoryElement key={uuidv4()}>
                  <StyledCategoryItem selectedCategory>
                    {item}
                  </StyledCategoryItem>

                  <Button
                    closeFilter={closeFilter}
                    data-target={item}
                    onClick={removeFilterCategory}
                  ></Button>
                </StyledSelectedCategoryElement>
              );
            })}
          </StyledSelectedCategoryContainer>
        </StyledCategoriesContainer>
      </AnimatedNavbarWrapper>
    </animated.div>
  );
};

export default ProductsFilterMenu;
