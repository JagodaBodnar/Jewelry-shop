import React from "react";
import { Switch, Route } from "react-router-dom";
import Wishlist from "../components/wishlist/Wishlist";
import { routes } from "../routes";
import Home from "../views/Home/Home";
import Products from "../views/Products/Products";
import SingleProduct from "../views/SingleProduct/SingleProduct";
import Contact from "../views/Contact/Contact";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.products} component={Products} />
      <Route path={routes.contact} component={Contact} />
      <Route path={routes.list} component={Wishlist} />
      <Route path="/products/:name" component={SingleProduct} />
    </Switch>
  );
};

export default Router;
