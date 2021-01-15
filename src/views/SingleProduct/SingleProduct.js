import React, { useContext, useState } from "react";
import Button from "../../components/reusableComponents/Button";
import RootContext from "../../context/context";
import { HeadingOne } from "../../components/reusableComponents/Heading";
import {
  StyledAddToWishlist,
  StyledButtonContainer,
  StyledDetailsContainer,
  StyledHeaderContainer,
  StyledImage,
  StyledImgContainer,
  StyledSingleProductContainer,
  StyledPriceParagraph,
  StyledIsOnWishlist,
  StyledProductDescription,
} from "./SingleProductStyles";

const SingleProduct = (props) => {
  const context = useContext(RootContext);
  const {
    increaseCartCounter,
    addProductToCart,
    handleDuplicateNamesOfProducts,
    handleWishlist,
    openWishlistPopUp,
  } = context;
  const {
    productName,
    productImage,
    productPrice,
    productDesc,
    wishList,
  } = props.location.state;
  const [toggleWishlistLogo, setToggleWishlistLogo] = useState(wishList);
  const toggle = () => {
    setToggleWishlistLogo(!toggleWishlistLogo);
  };

  return (
    <>
      <StyledSingleProductContainer>
        <StyledImgContainer>
          <StyledImage src={productImage} alt="single product foto" />
        </StyledImgContainer>
        <StyledDetailsContainer>
          <StyledHeaderContainer>
            <HeadingOne singleProductHeader>{productName}</HeadingOne>
            <StyledPriceParagraph>{productPrice}$</StyledPriceParagraph>
          </StyledHeaderContainer>
          <StyledButtonContainer>
            <Button
              addToWishlist
              onClick={() => {
                handleWishlist(productName);
                toggle();
                openWishlistPopUp();
              }}
            >
              {wishList ? (
                toggleWishlistLogo ? (
                  <StyledIsOnWishlist />
                ) : (
                  <StyledAddToWishlist />
                )
              ) : toggleWishlistLogo ? (
                <StyledIsOnWishlist />
              ) : (
                <StyledAddToWishlist />
              )}
            </Button>

            <Button
              addToCart
              onClick={() => {
                handleDuplicateNamesOfProducts(productName);
                addProductToCart(productName);
                increaseCartCounter(productName);
              }}
            >
              Add to cart
            </Button>
          </StyledButtonContainer>
          <StyledProductDescription>{productDesc}</StyledProductDescription>
        </StyledDetailsContainer>
      </StyledSingleProductContainer>
    </>
  );
};

export default SingleProduct;
