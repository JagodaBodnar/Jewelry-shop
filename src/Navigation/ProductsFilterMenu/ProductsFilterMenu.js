import React, { useContext } from "react";
import RootContext from "../../context/context";
import styled, { css } from "styled-components";
import Button from "../../components/reusableComponents/Button";
import { HeadingTwo } from "../../components/reusableComponents/Heading.js";
import { BsSearch } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import {
  productsCategories,
  mineral,
  metal,
} from "../../localData/productsCategories";
import { useSpring, animated } from "react-spring";

const AnimatedNavbarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.navyBlue};
  padding: 5px;
  width: 100%;
`;

const StyledCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  width: 60vw;
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
  &:hover {
    color: ${({ theme }) => theme.white};
  }
  ${({ selectedCategory }) =>
    selectedCategory &&
    css`
      margin-bottom: 0;
      color: grey;
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
  justify-content: center;
  align-items: flex-start;
`;
const StyledSelectedCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  align-items: center;
  grid-column: span 2;
`;
const StyledSelectedCategoryElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 2px;
  padding: 2px;
  border-radius: 2px;
`;

const ProductsFilterMenu = ({ isProductMenuVisible }) => {
  const context = useContext(RootContext);

  const anim = useSpring({
    config: { duration: 500 },
    height: isProductMenuVisible ? "280px" : "0px",
    opacity: isProductMenuVisible ? "1" : "0",
  });
  // const anim = useSpring({
  //   config: { duration: 1000 },
  //   height: isProductMenuVisible ? "280px" : "0px",
  //   opacity: isProductMenuVisible ? "1" : "0",
  // });

  const {
    resetFilters,
    filterProducts,
    filterProductsBySearchInput,
    categoryFilter,
    removeFilterCategory,
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
                  <StyledCategoryItem data-target={item}>
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
                  <StyledCategoryItem data-target={item}>
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
                  <StyledCategoryItem data-target={item}>
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
            {categoryFilter.map((item) => {
              return (
                <>
                  <StyledSelectedCategoryElement>
                    <StyledCategoryItem selectedCategory>
                      {item}
                    </StyledCategoryItem>
                    <Button
                      data-target={item}
                      close
                      onClick={removeFilterCategory}
                    >
                      <IoIosClose />
                    </Button>
                  </StyledSelectedCategoryElement>
                </>
              );
            })}
          </StyledSelectedCategoryContainer>
        </StyledCategoriesContainer>
      </AnimatedNavbarWrapper>
    </animated.div>
  );
};

export default ProductsFilterMenu;
