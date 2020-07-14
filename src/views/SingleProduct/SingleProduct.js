import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../../components/reusableComponents/Button";
import { FaHeart } from "react-icons/fa";
import RootContext from "../../context/context";
import { HeadingOne } from "../../components/reusableComponents/Heading";
import { device } from "../../globalStyles/Device";

const StyledSingleProductContainer = styled.div`
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  width: 80vw;
  height: 63vh;
  margin: 18vh auto 10vh auto;
  display: grid;
  grid-gap: 10px;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
`;
const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledPriceParagraph = styled.p`
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.indigo};
`;
const StyledIsOnWishlist = styled(FaHeart)`
  font-size: 18px;
  color: #ce3c72;
`;
const StyledAddToWishlist = styled(FaHeart)`
  font-size: 18px;
  color: #c2c2c2;
`;
const StyledButtonContainer = styled.div`
  display: flex;
`;
const StyledProductDescription = styled.div`
  text-align: center;
  width: 80%;
  color: ${({ theme }) => theme.grey};
`;
const StyledImage = styled.img`
  @media ${device.mobileS} {
    width: 240px;
    height: 230px;
  }
  @media ${device.mobile} {
    width: 278px;
    height: 268px;
  }
  @media ${device.laptop} {
    width: auto;
    height: auto;
  }
`;
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
    image,
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
          <StyledImage src={image} alt="single product foto" />
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
                handleDuplicateNamesOfProducts(productName, productPrice);
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
