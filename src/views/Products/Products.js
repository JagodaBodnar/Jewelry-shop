import React, { useContext, useState } from "react";
import RootContext from "../../context/context";
import ProductsList from "../../components/ProductsList";
import ProductsFilterMenu from "../../Navigation/ProductsFilterMenu/ProductsFilterMenu";
import Button from "../../components/reusableComponents/Button";
import styled from "styled-components";
import { HeadingOne } from "../../components/reusableComponents/Heading";
import { useSpring, animated, config } from "react-spring";

const Products = () => {
  const context = useContext(RootContext);

  const [isProductMenuVisible, setProductMenuVisiblity] = useState(false);

  const anim = useSpring({
    config: { duration: 500 },
    height: isProductMenuVisible ? "280px" : "0px",
    opacity: isProductMenuVisible ? "1" : "0",
  });

  const StyledProductCategoriesContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    z-index: 100;
    top: 8vh;
    width: 100%;
    min-height: 8vh;
    background-color: #fff;
    margin: 20px 0;
  `;
  const StyledProductNavContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 60vw;
    margin: 20px auto;
  `;
  return (
    <>
      <StyledProductCategoriesContainer>
        <StyledProductNavContainer>
          <HeadingOne>Products</HeadingOne>
          <Button
            filter
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
    </>
  );
};

export default Products;
