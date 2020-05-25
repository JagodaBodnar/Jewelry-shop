import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import RootContext from "../context/context";
import styled from "styled-components";

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
    height: "90vh",
    width: "35vw",
  },
}));

const StyledCartWrapper = styled.div`
  position: absolute;
  z-index: 9999;
`;

const Cart = () => {
  const classes = useStyles();

  const context = useContext(RootContext);

  const { isCartOpen, handleCartClose, cart, removeProductFromCart } = context;

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
          <div className={classes.paper}>
            <h1>Your Cart</h1>
            <ul>
              {cart.map((item) => {
                const {
                  productName,
                  productPrice,
                  productQuantity,
                  productImage,
                } = item;
                return (
                  <li key={productName}>
                    <img src={productImage} alt="product foto" />
                    <h6>{productName}</h6>
                    <h6>{productQuantity}</h6>
                    <h6>{productPrice}$</h6>
                    <button onClick={() => removeProductFromCart(productName)}>
                      x
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Fade>
      </Modal>
    </StyledCartWrapper>
  );
};

export default Cart;
