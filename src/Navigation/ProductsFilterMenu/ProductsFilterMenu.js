import React, { useContext, useState } from "react";
import RootContext from "../../context/context";
import styled, { keyframes, css } from "styled-components";
import Button from "../../components/reusableComponents/Button";
import { HeadingTwo } from "../../components/reusableComponents/Heading.js";
import { BsSearch } from "react-icons/bs";
import {
  productsCategories,
  mineral,
  metal,
} from "../../localData/productsCategories";

const ProductsFilterMenu = ({ anim }) => {
  const context = useContext(RootContext);

  const {
    resetFilters,
    filterProductsByType,
    filterProductsBySearchInput,
    filterProductsByMetal,
    filterProductsByMineral,
  } = context;

  const navAnim = keyframes`
  0% {opacity: 0; height: 0px;}
  100% {opacity: 1; height: 280px;}
  
  `;

  const StyledFilterNavigation = styled.nav`
    background-color: #051c26;
    padding: 5px;
    height: 280px;
    width: 100%;

    ${({ anim }) =>
      anim &&
      css`
        animation: ${navAnim} 0.9s ease-in-out;
      `}
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
    color: #fff;
    font-size: 16px;
    font-weight: 200;
    text-align: left;
    margin-bottom: 5px;
    &:hover {
      color: #dbbe23;
    }
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

  return (
    <StyledFilterNavigation anim={anim}>
      <StyledCategoriesContainer>
        <div>
          <HeadingTwo categoryName>Metal</HeadingTwo>
          <StyledCategories onClick={filterProductsByMetal}>
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
          <StyledCategories onClick={filterProductsByMineral}>
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
          <StyledCategories onClick={filterProductsByType}>
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
        <div id="filter"></div>
        <Button resetFilter onClick={resetFilters}>
          Reset Filters
        </Button>
      </StyledCategoriesContainer>
    </StyledFilterNavigation>
  );
};

export default ProductsFilterMenu;
