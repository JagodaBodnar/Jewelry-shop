import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../context/context";
import {
  HeadingTwo,
  HeadingOne,
} from "../components/reusableComponents/Heading";
import { IoIosClose, IoIosRemove, IoIosAdd } from "react-icons/io";
import Button from "../components/reusableComponents/Button";
import PaypalButton from "./PaypalButton";
import { v4 as uuidv4 } from "uuid";
import {
  useStyles,
  StyledCartWrapper,
  StyledModalContainer,
  StyledEmptyCartContainer,
  StyledCartHeader,
  StyledCartItemList,
  StyledCartItemElement,
  StyledCartItemImage,
  StyledProductQuantity,
  StyledTotalCart,
  StyledPayPal,
} from "./CartStyles";

const Cart = ({ history }) => {
  const classes = useStyles();

  const context = useContext(RootContext);

  const {
    isCartOpen,
    handleCartClose,
    cart,
    removeProductFromCart,
    increaseItemCounter,
    decreaseItemCounter,
    itemCounter,
    clearCart,
    cartTotal,
    clearCartCounter,
  } = context;

  return (
    <StyledCartWrapper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isCartOpen}
        onClose={handleCartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isCartOpen}>
          <StyledModalContainer className={classes.paper}>
            <StyledCartHeader>
              <HeadingOne cartheader>Cart</HeadingOne>
              <HeadingOne cartitemheader>Quantity</HeadingOne>
              <HeadingOne cartitemheader>Price</HeadingOne>
              <span></span>
              <HeadingOne cartitemheader>Sum</HeadingOne>
            </StyledCartHeader>
            {cart.length === 0 ? (
              <StyledEmptyCartContainer>
                <HeadingTwo>Your cart is empty</HeadingTwo>
              </StyledEmptyCartContainer>
            ) : (
              <>
                <StyledCartItemList>
                  {cart.map((item) => {
                    const {
                      productName,
                      productPrice,
                      productQuantity,
                      productImage,
                    } = item;
                    return (
                      <StyledCartItemElement key={uuidv4()}>
                        <StyledCartItemImage
                          src={productImage}
                          alt="product foto"
                        />
                        <HeadingTwo cartItemName>{productName}</HeadingTwo>
                        <HeadingTwo bold cartItemQuantity>
                          <Button
                            quantity
                            onClick={() => {
                              decreaseItemCounter(productName);
                            }}
                          >
                            <IoIosRemove />
                          </Button>
                          <StyledProductQuantity>
                            {productQuantity} {itemCounter}
                          </StyledProductQuantity>
                          <Button
                            quantity
                            onClick={() => {
                              increaseItemCounter(productName);
                            }}
                          >
                            <IoIosAdd />
                          </Button>
                        </HeadingTwo>
                        <HeadingTwo bold>{productPrice}$</HeadingTwo>
                        <Button
                          close
                          onClick={() =>
                            removeProductFromCart(productName, productQuantity)
                          }
                        >
                          <IoIosClose />
                        </Button>
                        <HeadingTwo bold>
                          {productQuantity * productPrice}$
                        </HeadingTwo>
                      </StyledCartItemElement>
                    );
                  })}
                </StyledCartItemList>
                <StyledTotalCart>
                  <HeadingOne totalSum>TOTAL </HeadingOne>
                  <HeadingTwo totalSum bold>
                    {cartTotal}$
                  </HeadingTwo>
                </StyledTotalCart>
                <StyledPayPal>
                  <PaypalButton
                    history={history}
                    clearCart={clearCart}
                    cartTotal={cartTotal}
                    handleCartClose={handleCartClose}
                    clearCartCounter={clearCartCounter}
                  />
                </StyledPayPal>
              </>
            )}
          </StyledModalContainer>
        </Fade>
      </Modal>
    </StyledCartWrapper>
  );
};

export default Cart;
