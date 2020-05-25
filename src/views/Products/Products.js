import React, { useContext, useState } from "react";
import RootContext from "../../context/context";
import ProductsList from "../../components/ProductsList";
import ProductsFilterMenu from "../../Navigation/ProductsFilterMenu/ProductsFilterMenu";
import Button from "../../components/reusableComponents/Button";
import styled from "styled-components";
import { HeadingOne } from "../../components/reusableComponents/Heading";

const Products = () => {
  const context = useContext(RootContext);

  const [isAnimRunning, setAnimRunning] = useState(false);
  const [isProductMenuVisible, setProductMenuVisiblity] = useState(false);

  const runAnim = () => {
    setAnimRunning(true);
    setTimeout(() => {
      setAnimRunning(false);
    }, 901);
  };

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
            disabled={isAnimRunning ? true : false}
            filter
            onClick={() => {
              setProductMenuVisiblity(!isProductMenuVisible);
              runAnim();
            }}
          >
            {isProductMenuVisible ? "Close filter" : "Filter"}
          </Button>
        </StyledProductNavContainer>
        {isProductMenuVisible ? (
          <ProductsFilterMenu anim={isAnimRunning} />
        ) : (
          ""
        )}
      </StyledProductCategoriesContainer>

      <ProductsList />
    </>
  );
};

export default Products;
