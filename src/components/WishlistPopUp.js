import React, { useContext } from "react";
import RootContext from "../context/context";
import styled from "styled-components";
import { HeadingTwo } from "./reusableComponents/Heading";
import { Link } from "react-router-dom";
import Button from "./reusableComponents/Button";
import { IoIosClose } from "react-icons/io";
import { routes } from "../routes";
import { device } from "../globalStyles/Device";

const StyledWishlistPopUpContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  top: -15px;
  left: calc(100% - 290px);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 9999;
  @media ${device.mobileS} {
    left: calc(100% - 280px);
  }
  @media ${device.mobile} {
    left: calc(100% - 280px);
  }
  @media ${device.laptop} {
    left: calc(100% - 290px);
  }
`;
const StyledWishlistPopUpOff = styled.div`
  visibility: hidden;
  width: 278px;
  background-color: #fff;
  border: 1px solid grey;
  color: white;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 5%;
`;
const StyledWishlistPopUp = styled.div`
  visibility: visible;
  width: 278px;
  background-color: #fff;
  border: 1px solid grey;
  color: white;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 5%;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent grey transparent;
  }
`;
const StyledOverflowContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;
const StyledProductListElement = styled.li`
  width: 258px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-bottom: 1px solid #ececec;
  padding: 5px;
`;
const StyledLink = styled(Link)`
  width: 220px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
const StyledProductImage = styled.img`
  width: 50px;
  height: 50px;
`;
const StyledGoToWishlist = styled(Link)`
  color: #ce3c72;
`;

const WishlistPopUp = () => {
  const context = useContext(RootContext);
  const { wishlist, handleWishlist, openPopUp } = context;
  return (
    <>
      {openPopUp ? (
        <StyledWishlistPopUpContainer>
          <StyledWishlistPopUp>
            <StyledOverflowContainer>
              {wishlist.map((item) => {
                const {
                  productName,
                  productPrice,
                  productQuantity,
                  productDesc,
                  image,
                } = item;
                return (
                  <>
                    <StyledProductListElement key={productName}>
                      <StyledLink
                        to={{
                          pathname: `/products/${productName}`,
                          state: {
                            productName,
                            productPrice,
                            image,
                            productDesc,
                            productQuantity,
                          },
                        }}
                      >
                        <StyledProductImage src={image} alt="product foto" />
                        <HeadingTwo>{productName}</HeadingTwo>
                        <HeadingTwo>{productPrice}$</HeadingTwo>
                      </StyledLink>
                      <Button close onClick={() => handleWishlist(productName)}>
                        <IoIosClose />
                      </Button>
                    </StyledProductListElement>
                  </>
                );
              })}
              <StyledGoToWishlist to={routes.list}>
                <Button>Go to wishlist</Button>
              </StyledGoToWishlist>
            </StyledOverflowContainer>
          </StyledWishlistPopUp>
        </StyledWishlistPopUpContainer>
      ) : (
        <StyledWishlistPopUpContainer>
          <StyledWishlistPopUpOff></StyledWishlistPopUpOff>
        </StyledWishlistPopUpContainer>
      )}
    </>
  );
};
export default WishlistPopUp;
