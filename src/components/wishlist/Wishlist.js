import React, { useContext } from "react";
import RootContext from "../../context/context";
import Button from "../reusableComponents/Button";
import { HeadingTwo } from "../reusableComponents/Heading";
import { IoIosClose } from "react-icons/io";
import {
  StyledEmptyWishlist,
  StyledWishlistContainer,
  StyledProductList,
  StyledProductItem,
  StyledRemoveFromListContainer,
  StyledAddToCartButtonContainer,
  StyledAddToCart,
  StyledProductImage,
  StyledLink,
  StyledProductListElement,
} from "./WishlistStyles";

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
                productImage,
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
                            productImage,
                            productQuantity,
                          },
                        }}
                      >
                        <StyledProductImage
                          src={productImage}
                          alt="product foto"
                        />
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
