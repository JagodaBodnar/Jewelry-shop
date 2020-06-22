import React, { useContext, useState } from "react";
import RootContext from "../../context/context";
import ProductsList from "../../components/ProductsList";
import ProductsFilterMenu from "../../Navigation/ProductsFilterMenu/ProductsFilterMenu";
import Button from "../../components/reusableComponents/Button";
import styled from "styled-components";
import { HeadingOne } from "../../components/reusableComponents/Heading";
import { useSpring, animated } from "react-spring";

const StyledProductCategoriesContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  z-index: 100;
  top: 8vh;
  width: 100%;
  background-color: #fff;
  margin: 20px 0;
`;
const StyledProductNavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60vw;
  margin: 100px auto 5px auto;
`;
const StyledNoProductsFound = styled.div`
  text-align: center;
  width: 50%;
  margin: 50px auto;
  font-family: "Scope One", serif;
  color: #828281;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
`;

const Products = () => {
  const context = useContext(RootContext);

  const [isProductMenuVisible, setProductMenuVisiblity] = useState(false);
  const anim = useSpring({
    config: { duration: 500 },
    height: isProductMenuVisible ? "280px" : "0px",
    opacity: isProductMenuVisible ? "1" : "0",
    overflow: "hidden",
  });
  // const anim = useSpring({
  //   config: { duration: 500 },
  //   height: isProductMenuVisible ? "280px" : "0px",
  //   opacity: isProductMenuVisible ? "1" : "0",
  // });
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

      <ProductsList />
      <StyledNoProductsFound>
        {context.products.length === 0
          ? `No products were found matching your selection.`
          : ""}
      </StyledNoProductsFound>
    </>
  );
};

export default Products;
