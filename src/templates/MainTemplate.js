import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Cart from "../components/Cart";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <Cart />
      {children}
    </>
  );
};
export default MainTemplate;
