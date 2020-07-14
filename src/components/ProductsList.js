import React, { useContext } from "react";
import RootContext from "../context/context";
import ProductsListElement from "./ProductsListElement";
import styled from "styled-components";
import { device } from "../globalStyles/Device";

const StyledProductList = styled.ul`
  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin: 15vh auto;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    width: 80vw;
    margin: 15vh auto;
  }
  @media ${device.desktop} {
    width: 80vw;
    margin: 10px;
    margin: 15vh auto;
  }
  display: grid;
  grid-gap: 5px;
  list-style: none;
  background-color: #ffffff;
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    margin: 15vh auto;
  }
`;

const StyledProductItem = styled.li`
  justify-self: center;
  margin: 10px;
  transition: ease 0.2s;
  cursor: pointer;
  padding: 0;
  border-bottom: 1px solid #ececec;
  &:hover {
    border-radius: 5px;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    border-bottom: none;
  }
`;

const ProductsList = () => {
  const context = useContext(RootContext);
  const { products } = context;

  const sortingAlgorithm = (firstProduct, secondProduct) =>
    firstProduct.productId - secondProduct.productId;

  const sortedProducts = products.sort(sortingAlgorithm);

  return (
    <StyledProductList>
      {sortedProducts.map((product) => {
        return (
          <>
            <StyledProductItem key={product.productName}>
              <ProductsListElement {...product} />
            </StyledProductItem>
          </>
        );
      })}
    </StyledProductList>
  );
};

export default ProductsList;
