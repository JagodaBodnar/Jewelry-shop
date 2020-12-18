import React, { useContext } from "react";
import RootContext from "../context/context";
import { HeadingTwo } from "./reusableComponents/Heading.js";
import Button from "./reusableComponents/Button.js";
import { v4 as uuidv4 } from "uuid";
import {
  StyledWishlistButtonContainer,
  StyledTooltip,
  StyledAddToWishlist,
  StyledIsOnWishlist,
  StyledAddToCartButtonContainer,
  StyledAddToCart,
  StyledImgContainer,
  StyledProductImage,
  StyledProductListElement,
  StyledLink,
} from "./ProductsListElementStyles";

const ProductsListElement = ({
  productName,
  productPrice,
  productImage,
  productDesc,
  productQuantity,
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
    <StyledProductListElement key={uuidv4()}>
      <StyledWishlistButtonContainer>
        <Button
          onClick={() => {
            addProductToWishlist(productName);
            handleWishlist(productName);
            openWishlistPopUp();
          }}
        >
          {wishList === true ? <StyledIsOnWishlist /> : <StyledAddToWishlist />}
          <StyledTooltip>Add to wishlist</StyledTooltip>
        </Button>
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
        <HeadingTwo products>{productName}</HeadingTwo>
        <HeadingTwo price>
          {productPrice} <span>$</span>
        </HeadingTwo>
      </StyledLink>

      <StyledAddToCartButtonContainer>
        <Button
          onClick={() => {
            handleDuplicateNamesOfProducts(productName, productPrice);
            addProductToCart(productName);
            increaseCartCounter(productName);
          }}
        >
          <StyledAddToCart />
        </Button>
      </StyledAddToCartButtonContainer>
    </StyledProductListElement>
  );
};

export default ProductsListElement;
