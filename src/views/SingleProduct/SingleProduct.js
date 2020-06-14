import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../components/reusableComponents/Button";
import { FaHeart } from "react-icons/fa";
import RootContext from "../../context/context";
import {
  HeadingTwo,
  HeadingOne,
} from "../../components/reusableComponents/Heading";

const StyledSingleProductContainer = styled.div`
  width: 80vw;
  height: 50vh;
  margin: 15vh auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
const SingleProduct = (props) => {
  const context = useContext(RootContext);
  const {
    increaseCartCounter,
    addProductToCart,
    handleDuplicateNamesOfProducts,
  } = context;
  const {
    productName,
    productImage,
    productPrice,
    productDesc,
  } = props.location.state;

  return (
    <>
      <StyledSingleProductContainer>
        <StyledImgContainer>
          <img src={productImage} alt="single product foto" />
        </StyledImgContainer>
        <StyledDetailsContainer>
          <StyledHeaderContainer>
            <HeadingOne singleProductHeader>{productName}</HeadingOne>
            <StyledPriceParagraph>{productPrice}$</StyledPriceParagraph>
          </StyledHeaderContainer>
          <StyledButtonContainer>
            <Button addToWishlist>
              <StyledAddToWishlist />
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
