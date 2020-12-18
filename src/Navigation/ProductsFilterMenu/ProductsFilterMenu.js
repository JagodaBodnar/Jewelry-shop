import React, { useContext } from "react";
import RootContext from "../../context/context";
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
import { v4 as uuidv4 } from "uuid";
import {
  AnimatedNavbarWrapper,
  StyledCategoriesContainer,
  StyledCategories,
  StyledCategoryItem,
  StyledSearchInput,
  StyledForm,
  StyledSelectedCategoryContainer,
  StyledSelectedCategoryElement,
} from "./ProductsFilterMenuStyles";

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
