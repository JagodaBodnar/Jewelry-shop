import React, { useContext } from "react";
import RootContext from "../context/context";
import ProductBestsellerElement from "./ProductBestsellerElement";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../globalStyles/Device";

const StyledProductList = styled.ul`
  display: grid;
  grid-gap: 5px;
  margin: 10px;
  list-style: none;
  background-color: #ffffff;
  margin: 0 auto;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
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
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ProductEmeraldBestseller = () => {
  const context = useContext(RootContext);
  const { emerald } = context;

  return (
    <StyledProductList>
      {emerald.map((product) => {
        return (
          <StyledProductItem key={product.productName}>
            <ProductBestsellerElement {...product} />
          </StyledProductItem>
        );
      })}
    </StyledProductList>
  );
};

export default ProductEmeraldBestseller;
