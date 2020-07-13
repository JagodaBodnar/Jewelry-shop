import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

class PaypalButton extends Component {
  render() {
    const {
      clearCart,
      cartTotal,
      handleCartClose,
      clearCartCounter,
    } = this.props;

    const onSuccess = (payment) => {
      console.log("Payment was succeeded!", payment);

      clearCart();
      handleCartClose();
      clearCartCounter();
    };

    const onCancel = (data) => {
      console.log("The payment was cancelled", data);
    };

    const onError = (err) => {
      console.error("Error", err);
    };

    let env = "sandbox";
    let currency = "USD";

    const client = {
      sandbox: process.env.REACT_APP_SANDBOX_PAYPAL_ID,
      production: "YOUR-PRODUCTION-APP-ID",
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={cartTotal}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}

export default PaypalButton;
