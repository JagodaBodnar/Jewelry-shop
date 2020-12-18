import React, { useContext, useState } from "react";
import RootContext from "../../context/context";
import ProductsList from "../../components/ProductsList";
import ProductsFilterMenu from "../../Navigation/ProductsFilterMenu/ProductsFilterMenu";
import Button from "../../components/reusableComponents/Button";
import { HeadingOne } from "../../components/reusableComponents/Heading";
import { useSpring, animated } from "react-spring";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  StyledProductCategoriesContainer,
  StyledProductNavContainer,
  StyledNoProductsFound,
} from "./ProductsStyles";

const Products = () => {
  const context = useContext(RootContext);

  const [isProductMenuVisible, setProductMenuVisiblity] = useState(false);
  const screenSizeMobile = useMediaQuery("(max-width:576px)");
  const anim = useSpring({
    config: { duration: 500 },
    height: isProductMenuVisible
      ? screenSizeMobile
        ? "450px"
        : "280px"
      : "0px",
    opacity: isProductMenuVisible ? "1" : "0",
    overflow: "hidden",
  });

  return (
    <>
      <StyledProductCategoriesContainer>
        <StyledProductNavContainer>
          <HeadingOne>Products</HeadingOne>
          <Button
            isfilter
            onClick={() => {
              setProductMenuVisiblity(!isProductMenuVisible);
            }}
          >
            {isProductMenuVisible ? "Close filter" : "Filter"}
          </Button>
        </StyledProductNavContainer>
        <animated.div style={anim}>
          <ProductsFilterMenu isProductMenuVisible={isProductMenuVisible} />
        </animated.div>
      </StyledProductCategoriesContainer>
      <ProductsList isProductMenuVisible={isProductMenuVisible} />
      <StyledNoProductsFound>
        {context.products.length === 0
          ? `No products were found matching your selection.`
          : ""}
      </StyledNoProductsFound>
    </>
  );
};

export default Products;
