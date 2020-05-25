import React, { useContext } from "react";
import RootContext from "../context/context";
import ProductsListElement from "./ProductsListElement";
import styled from "styled-components";

const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin: 10px;
  list-style: none;
  background-color: #ffffff;
  width: 60vw;
  margin: 0 auto;
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

  return (
    <StyledProductList>
      {products.map((product) => {
        const {
          productName,
          productPrice,
          productImage,
          productQuantity,
          productDesc,
        } = product;
        return (
          <StyledProductItem key={productName}>
            <ProductsListElement {...product} />
          </StyledProductItem>
        );
      })}
    </StyledProductList>
  );
};

export default ProductsList;
