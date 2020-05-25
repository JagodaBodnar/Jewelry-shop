import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import { routes } from "../../routes";
import MainTemplate from "../../templates/MainTemplate";
import RootContext from "../../context/context";
import { productsDataArray } from "../../localData/productsDataArray";

const Root = () => {
  const initialState = [...productsDataArray];

  const [cartCounter, setCartCounter] = useState(0);
  const [products, setProducts] = useState([...initialState]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addProductToCart = (productName) => {
    const filteredProducts = products.filter(
      (product) => product.productName === productName
    );

    setCart([...cart, ...filteredProducts]);
  };

  const removeProductFromCart = (productName) => {
    const filteredProducts = cart.filter(
      (product) => product.productName !== productName
    );

    setCart([...filteredProducts]);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const increaseCartCounter = () => {
    setCartCounter(cartCounter + 1);
  };

  const filterProductsByType = (e) => {
    const filteredProducts = products.filter(
      (product) => product.categories === e.target.getAttribute("data-target")
    );
    setProducts([...filteredProducts]);
  };

  const filterProductsByMetal = (e) => {
    const filteredProducts = products.filter(
      (product) => product.metal === e.target.getAttribute("data-target")
    );
    setProducts([...filteredProducts]);
  };

  const filterProductsByMineral = (e) => {
    const filteredProducts = products.filter(
      (product) => product.mineral === e.target.getAttribute("data-target")
    );
    setProducts([...filteredProducts]);
  };

  const filterProductsBySearchInput = (e) => {
    e.preventDefault();
    let tempProducts = [...initialState];
    const searchInputValue = e.target.getAttribute("data-target");

    if (searchInputValue.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearchInput = searchInputValue.toLowerCase();
        let tempProductName = item.productName.toLowerCase();

        if (tempProductName.includes(tempSearchInput)) {
          return item;
        }
      });
    }
    e.target.reset();
    setProducts(tempProducts);
  };

  const resetFilters = () => {
    setProducts([...initialState]);
  };

  return (
    <BrowserRouter>
      <RootContext.Provider
        value={{
          cartCounter,
          increaseCartCounter,
          products,
          filterProductsByType,
          resetFilters,
          filterProductsByMetal,
          filterProductsByMineral,
          filterProductsBySearchInput,
          isCartOpen,
          handleCartClose,
          handleCartOpen,
          addProductToCart,
          removeProductFromCart,
          cart,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route path={routes.products} component={Products} />
          </Switch>
        </MainTemplate>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
