import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Cart from "../components/Cart";
import { ThemeProvider } from "styled-components";
import { mainGlobalStyles } from "../globalStyles/mainGlobalStyles";
import GlobalStyle from "../globalStyles/GlobalStyle";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainGlobalStyles}>
        <>
          <Navbar />
          <Cart />
          {children}
        </>
      </ThemeProvider>
    </>
  );
};
export default MainTemplate;
