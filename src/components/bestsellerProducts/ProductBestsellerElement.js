import React, { useContext } from "react";
import RootContext from "../../context/context";
import { HeadingTwo } from "../reusableComponents/Heading.js";
import Button from "../reusableComponents/Button.js";
import { Link } from "react-router-dom";
import {
  StyledWishlistButtonContainer,
  StyledTooltip,
  StyledImgContainer,
  StyledProductImage,
  StyledLink,
  StyledAddToCartButtonContainer,
  StyledAddToCart,
  StyledIsOnWishlist,
  StyledAddToWishlist,
  StyledProductListElement,
} from "./ProductBestsellerElementStyles";

const ProductsBestsellerElement = ({
  productName,
  productPrice,
  productImage,
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
            productImage,
            productQuantity,
            productDesc,
            wishList,
          },
        }}
      >
        <StyledImgContainer>
          <StyledProductImage src={productImage} alt="product foto" />
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
              handleDuplicateNamesOfProducts(productName);
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
