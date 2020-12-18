import React, { useContext } from "react";
import RootContext from "../context/context";
import ProductsListElement from "./ProductsListElement";
import { v4 as uuidv4 } from "uuid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSpring, animated } from "react-spring";
import { StyledProductList, StyledProductItem } from "./ProductsListStyles";

const ProductsList = ({ isProductMenuVisible }) => {
  const context = useContext(RootContext);
  const { products } = context;

  const sortingAlgorithm = (firstProduct, secondProduct) =>
    firstProduct.productId - secondProduct.productId;
  const screenSizeMobile = useMediaQuery("(max-width:576px)");

  const sortedProducts = products.sort(sortingAlgorithm);
  const anim = useSpring({
    config: { duration: 500 },
    marginTop: isProductMenuVisible
      ? screenSizeMobile
        ? "600px"
        : "500px"
      : "0px",
  });

  return (
    <animated.div style={anim}>
      <StyledProductList>
        {sortedProducts.map((product) => {
          return (
            <StyledProductItem key={uuidv4()}>
              <ProductsListElement {...product} key={uuidv4()} />
            </StyledProductItem>
          );
        })}
      </StyledProductList>
    </animated.div>
  );
};

export default ProductsList;
