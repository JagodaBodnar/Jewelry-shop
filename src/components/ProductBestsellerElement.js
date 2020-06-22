import React, { useContext } from "react";
import RootContext from "../context/context";
import styled from "styled-components";
import { HeadingTwo } from "./reusableComponents/Heading.js";
import Button from "./reusableComponents/Button.js";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledWishlistButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const StyledTooltip = styled.span`
  color: #ead065;
  font-size: 10px;
  margin: 0 5px;
  opacity: 0;
  font-family: "Scope One", serif;
  vertical-align: top;
`;
const StyledAddToWishlist = styled(FaHeart)`
  font-size: 18px;
  color: transparent;
`;
const StyledAddToCartButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const StyledAddToCart = styled(FaShoppingBag)`
  font-size: 18px;
  color: transparent;
`;

const StyledProductImage = styled.img`
  width: 285px;
  height: 275px;
  padding: 15px;
`;

const StyledProductListElement = styled.div`
  padding: 15px;
  &:hover ${StyledAddToWishlist}, &:hover ${StyledAddToCart} {
    color: #c2c2c2;
    transition: 0.5s;
    &:hover,
    &:hover + ${StyledTooltip} {
      color: ${({ theme }) => theme.pink};
      opacity: 1;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ProductsBestsellerElement = ({
  productName,
  productPrice,
  productImage,
  productDesc,
  productQuantity,
}) => {
  const context = useContext(RootContext);
  const {
    increaseCartCounter,
    addProductToCart,
    handleDuplicateNamesOfProducts,
  } = context;

  return (
    <StyledProductListElement>
      <StyledWishlistButtonContainer>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <Button>
            <StyledAddToWishlist />
            <StyledTooltip>Add to wishlist</StyledTooltip>
          </Button>
        </Link>
      </StyledWishlistButtonContainer>
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
        <StyledProductImage src={productImage} alt="product foto" />
        <HeadingTwo>{productName}</HeadingTwo>
        <HeadingTwo price>
          {productPrice} <span>$</span>
        </HeadingTwo>
      </StyledLink>

      <StyledAddToCartButtonContainer>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <Button
            onClick={() => {
              handleDuplicateNamesOfProducts(productName, productPrice);
              addProductToCart(productName);
              increaseCartCounter(productName);
            }}
          >
            <StyledAddToCart />
          </Button>
        </Link>
      </StyledAddToCartButtonContainer>
    </StyledProductListElement>
  );
};

export default ProductsBestsellerElement;
