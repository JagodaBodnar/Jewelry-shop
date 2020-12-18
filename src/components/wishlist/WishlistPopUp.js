import React, { useContext } from "react";
import RootContext from "../../context/context";
import { HeadingTwo } from "./../reusableComponents/Heading";
import Button from "./../reusableComponents/Button";
import { IoIosClose } from "react-icons/io";
import { routes } from "../../routes";
import { v4 as uuidv4 } from "uuid";
import {
  StyledWishlistPopUpContainer,
  StyledWishlistPopUpOff,
  StyledWishlistPopUp,
  StyledOverflowContainer,
  StyledProductListElement,
  StyledLink,
  StyledProductImage,
  StyledGoToWishlist,
} from "./WishlistPopUpStyles";

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
                  productImage,
                } = item;
                return (
                  <StyledProductListElement key={uuidv4()}>
                    <StyledLink
                      to={{
                        pathname: `/products/${productName}`,
                        state: {
                          productName,
                          productPrice,
                          productImage,
                          productDesc,
                          productQuantity,
                        },
                      }}
                    >
                      <StyledProductImage
                        src={productImage}
                        alt="product foto"
                      />
                      <HeadingTwo>{productName}</HeadingTwo>
                      <HeadingTwo>{productPrice}$</HeadingTwo>
                    </StyledLink>
                    <Button close onClick={() => handleWishlist(productName)}>
                      <IoIosClose />
                    </Button>
                  </StyledProductListElement>
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
