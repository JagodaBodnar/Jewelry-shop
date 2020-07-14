import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../context/context";
import styled from "styled-components";
import {
  HeadingTwo,
  HeadingOne,
} from "../components/reusableComponents/Heading";
import { IoIosClose, IoIosRemove, IoIosAdd } from "react-icons/io";
import Button from "../components/reusableComponents/Button";
import PaypalButton from "./PaypalButton";
import { device } from "../globalStyles/Device";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "10px",
    "@media(max-width: 576px)": {
      height: "50vh",
    },
    "@media(min-width: 576px)": {
      height: "50vh",
    },
    "@media(min-width: 576px)": {
      width: "100vw",
    },
    "@media(min-width: 1200px)": {
      width: "65vw",
    },
  },
}));
const StyledModalContainer = styled.div`
  @media ${device.mobileS} {
    height: 70vh;
  }
  @media ${device.mobile} {
    height: 50vh;
  }
  @media ${device.laptop} {
    height: 80vh;
  }
  overflow-y: auto;
`;

const StyledCartWrapper = styled.div`
  position: absolute;
  z-index: 9999;
`;
const StyledCartHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #ececec;
`;
const StyledCartItemList = styled.ul`
  list-style: none;
`;
const StyledCartItemElement = styled.li`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #ececec;
`;
const StyledCartItemImage = styled.img`
  width: 100px;
  height: 100px;
  @media ${device.mobileS} {
    width: 50px;
    height: 50px;
  }
`;
const StyledProductQuantity = styled.span`
  background-color: #ececec;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTotalCart = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5px;
  margin-top: 30px;
`;
const StyledPayPal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

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
            <StyledCartItemList>
              {cart.map((item) => {
                const {
                  productName,
                  productPrice,
                  productQuantity,
                  image,
                } = item;
                return (
                  <>
                    <StyledCartItemElement key={productName}>
                      <StyledCartItemImage src={image} alt="product foto" />
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
                  </>
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
          </StyledModalContainer>
        </Fade>
      </Modal>
    </StyledCartWrapper>
  );
};

export default Cart;
