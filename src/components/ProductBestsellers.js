import React, { useContext } from "react";
import RootContext from "../context/context";
import ProductBestsellerElement from "./ProductBestsellerElement";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  margin: 10px;
  list-style: none;
  background-color: #ffffff;
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
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ProductBestsellers = () => {
  const context = useContext(RootContext);
  const { bestsellers } = context;

  return (
    <StyledProductList>
      {bestsellers.map((product) => {
        const {
          productName,
          productPrice,
          productImage,
          productQuantity,
          productDesc,
        } = product;
        return (
          <StyledLink
            to={{
              pathname: `/products/${productName}`,
              state: {
                productName,
                productPrice,
                productImage,
                productQuantity,
                productDesc,
              },
            }}
          >
            <StyledProductItem key={productName}>
              <ProductBestsellerElement {...product} />
            </StyledProductItem>
          </StyledLink>
        );
      })}
    </StyledProductList>
  );
};

export default ProductBestsellers;
