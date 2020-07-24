import React, { useContext } from "react";
import RootContext from "../../context/context";
import styled from "styled-components";
import Button from "../reusableComponents/Button";
import { HeadingTwo } from "../reusableComponents/Heading";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { device } from "../../globalStyles/Device";

const StyledEmptyWishlist = styled.div`
  min-height: 82vh;
  margin-top: 20px;
`;
const StyledWishlistContainer = styled.div`
  min-height: 82vh;
  margin-top: 20px;
`;

const StyledProductList = styled.ul`
  display: grid;
  grid-gap: 5px;
  margin: 10px;
  list-style: none;
  background-color: #ffffff;
  width: 60vw;
  margin: 0 auto;
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    width: 100vw;
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    width: 80vw;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
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

const StyledRemoveFromListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledProductListElement = styled.div`
  padding: 15px;
  &:hover ${StyledAddToCart} {
    color: #c2c2c2;
    transition: 0.5s;
  }
`;

const Wishlist = () => {
  const context = useContext(RootContext);
  const {
    wishlist,
    increaseCartCounter,
    addProductToCart,
    handleDuplicateNamesOfProducts,
    handleWishlist,
  } = context;
  return (
    <>
      {wishlist.length === 0 ? (
        <StyledEmptyWishlist>
          <HeadingTwo>No products on your wishlist</HeadingTwo>
        </StyledEmptyWishlist>
      ) : (
        <StyledWishlistContainer>
          <StyledProductList>
            {wishlist.map((item) => {
              const {
                productName,
                productPrice,
                productQuantity,
                image,
              } = item;
              return (
                <>
                  <StyledProductItem key={productName}>
                    <StyledProductListElement>
                      <StyledRemoveFromListContainer>
                        <Button
                          close
                          onClick={() => handleWishlist(productName)}
                        >
                          <IoIosClose />
                        </Button>
                      </StyledRemoveFromListContainer>
                      <StyledLink
                        to={{
                          pathname: `/products/${productName}`,
                          state: {
                            productName,
                            productPrice,
                            image,
                            productQuantity,
                          },
                        }}
                      >
                        <StyledProductImage src={image} alt="product foto" />
                        <HeadingTwo>{productName}</HeadingTwo>
                        <HeadingTwo price>
                          {productPrice} <span>$</span>
                        </HeadingTwo>
                      </StyledLink>

                      <StyledAddToCartButtonContainer>
                        <Button
                          onClick={() => {
                            handleDuplicateNamesOfProducts(
                              productName,
                              productPrice
                            );
                            addProductToCart(productName);
                            increaseCartCounter(productName);
                          }}
                        >
                          <StyledAddToCart />
                        </Button>
                      </StyledAddToCartButtonContainer>
                    </StyledProductListElement>
                  </StyledProductItem>
                </>
              );
            })}
          </StyledProductList>
        </StyledWishlistContainer>
      )}
    </>
  );
};

export default Wishlist;
