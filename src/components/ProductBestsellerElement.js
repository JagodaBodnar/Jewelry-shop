import React, { useContext } from "react";
import RootContext from "../context/context";
import styled from "styled-components";
import { HeadingTwo } from "./reusableComponents/Heading.js";
import Button from "./reusableComponents/Button.js";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { device } from "../globalStyles/Device";

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
  @media ${device.mobileS} {
    width: 170px;
    height: 160px;
  }
  @media ${device.mobile} {
    width: 170px;
    height: 160px;
  }
  @media ${device.desktop} {
    width: 215px;
    height: 205px;
  }
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
const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIsOnWishlist = styled(FaHeart)`
  font-size: 18px;
  color: #ce3c72;
`;
const ProductsBestsellerElement = ({
  productName,
  productPrice,
  image,
  productQuantity,
  productDesc,
  wishList,
}) => {
  const context = useContext(RootContext);
  const {
    increaseCartCounter,
    addProductToCart,
    handleDuplicateNamesOfProducts,
    addProductToWishlist,
    handleWishlist,
    openWishlistPopUp,
  } = context;

  return (
    <StyledProductListElement key={productName}>
      <StyledWishlistButtonContainer>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <Button
            onClick={() => {
              addProductToWishlist(productName);
              handleWishlist(productName);
              openWishlistPopUp();
            }}
          >
            {wishList === true ? (
              <StyledIsOnWishlist />
            ) : (
              <StyledAddToWishlist />
            )}
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
            image,
            productQuantity,
            productDesc,
            wishList,
          },
        }}
      >
        <StyledImgContainer>
          <StyledProductImage src={image} alt="product foto" />
        </StyledImgContainer>
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
