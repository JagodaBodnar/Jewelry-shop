import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import { routes } from "../../routes";
import MainTemplate from "../../templates/MainTemplate";
import RootContext from "../../context/context";
import { productsDataArray } from "../../localData/productsDataArray";

const Root = () => {
  const initialState = [...productsDataArray];

  const [cartCounter, setCartCounter] = useState(0);

  const [products, setProducts] = useState([...initialState]);
  const [productsToFilter, setProductsToFilter] = useState([...initialState]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([...new Set([])]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [cartTotal, setCartTotal] = useState(10);
  const [selected, setSelected] = useState([...categoryFilter]);
  const [bestsellers, setBestsellers] = useState([
    productsDataArray[0],
    productsDataArray[20],
  ]);
  const [emerald, setEmerald] = useState([
    productsDataArray[12],
    productsDataArray[43],
  ]);
  const [ruby, setRuby] = useState([
    productsDataArray[45],
    productsDataArray[47],
  ]);

  const clearCart = () => {
    setCart([...new Set([])]);
  };

  const increaseItemCounter = (productName) => {
    cart.forEach((item) => {
      if (item.productName === productName) {
        item.productQuantity = item.productQuantity + 1;
      } else {
      }
    });
    increaseCartCounter();
  };
  const decreaseItemCounter = (productName) => {
    cart.forEach((item) => {
      if (item.productName === productName && item.productQuantity > 1) {
        item.productQuantity = item.productQuantity - 1;
        decreaseCartCounter();
      } else {
      }
    });
  };
  const addProductToCart = (productName) => {
    const filteredProducts = products.filter(
      (product) => product.productName === productName
    );
    setCart([...new Set([...cart, ...filteredProducts])]);
  };

  const removeProductFromCart = (productName, productQuantity) => {
    const filteredProducts = cart.filter(
      (product) => product.productName !== productName
    );
    setCartCounter(cartCounter - productQuantity);
    cart.forEach((item) => {
      if (item.productName === productName) {
        item.productQuantity = 1;
      } else {
      }
    });

    setCart([...new Set([...filteredProducts])]);
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
  const decreaseCartCounter = () => {
    if (cartCounter > 0) {
      setCartCounter(cartCounter - 1);
    } else {
    }
  };
  const filterProducts = (e) => {
    let filterAttribute = e.target.getAttribute("data-target");
    const filteredProducts = products.filter((product) =>
      product.categories.includes(filterAttribute)
    );
    setProducts([...filteredProducts]);
    const filterCategory = categoryFilter.concat(filterAttribute);
    setCategoryFilter([...filterCategory]);
    // setSelected([...filterCategory]);
  };

  const removeFilterCategory = (e) => {
    let filterAttribute = e.target.getAttribute("data-target");
<<<<<<< HEAD
    // console.log(categoryFilter);
    // const filterCategory = categoryFilter.concat(filterAttribute);

    // if (filterCategory.length !== 0) {
    //   setSelectedCategories([...filterCategory]);
    //   console.log(selectedCategories);
    // }

    // console.log(selected);
    const categoryToRemove = selected.filter((category) => {
      console.log(category);
      // console.log(filterAttribute);
      if (category === filterAttribute) {
        return selected.filter(
          (remainCategories) => remainCategories !== category
        );
      }
      console.log(selected);
    });

    // console.log(categoryToRemove);
    setSelected([...categoryToRemove]);
    setProducts([...initialState]);

    console.log(selected);
    const removedFilter = products.filter((item) => {
      return selected.indexOf(item.categories !== -1);
    });
    console.log(removedFilter);
    //setProducts([...removedFilter]);
  };
=======
    console.log(categoryFilter);

    const categoryRemained = categoryFilter.map((category) => {
      if (category === filterAttribute) {
        const indexOfCategory = categoryFilter.indexOf(category);
        const newArray = categoryFilter.splice(indexOfCategory, 1);
        return newArray;
      }
    });
    const filteredProducts = productsToFilter.filter((product) =>
      product.categories.includes(categoryRemained)
    );
    setProductsToFilter([...filteredProducts]);
    setProducts([...productsToFilter]);
  };

>>>>>>> 89e3aa0... removing filters update
  // const filterProductsByMetal = (e) => {
  //   let filterAttribute = e.target.getAttribute("data-target");
  //   const filteredProducts = products.filter(
  //     (product) => product.metal === filterAttribute
  //   );

  //   setProducts([...filteredProducts]);

  //   const filterCategory = categoryFilter.concat(filterAttribute);
  //   setCategoryFilter([...filterCategory]);
  // };

  // const filterProductsByMineral = (e) => {
  //   let filterAttribute = e.target.getAttribute("data-target");
  //   const filteredProducts = products.filter(
  //     (product) => product.mineral === filterAttribute
  //   );
  //   setProducts([...filteredProducts]);
  //   const filterCategory = categoryFilter.concat(filterAttribute);
  //   setCategoryFilter([...filterCategory]);
  // };

  const filterProductsBySearchInput = (e) => {
    e.preventDefault();
    let tempProducts = [...initialState];
    const searchInputValue = e.target.search.value;

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
    setCategoryFilter([]);
  };

  const handleDuplicateNamesOfProducts = (productName) => {
    if (cart.length !== 0) {
      const copyOfCart = [...cart];

      copyOfCart.forEach((item) => {
        if (item.productName === productName) {
          item.productQuantity = item.productQuantity + 1;
        } else {
        }
      });

      setCart([...new Set([...copyOfCart])]);
    }
  };

  const handleCalculateCartTotals = () => {
    let total = 0;

    cart.forEach((item) => {
      total = total + item.productQuantity * item.productPrice;
    });

    setCartTotal(total);
  };

  useEffect(() => {
    handleCalculateCartTotals();
  }, [cart, cartCounter]);

  return (
    <BrowserRouter>
      <RootContext.Provider
        value={{
          cartCounter,
          increaseCartCounter,
          products,
          resetFilters,
          filterProducts,
          filterProductsBySearchInput,
          isCartOpen,
          handleCartClose,
          handleCartOpen,
          addProductToCart,
          removeProductFromCart,
          cart,
          categoryFilter,
          setCategoryFilter,
          removeFilterCategory,
          handleDuplicateNamesOfProducts,
          increaseItemCounter,
          decreaseItemCounter,
          removeFilterCategory,
          bestsellers,
          emerald,
          ruby,
          clearCart,
          cartTotal,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.products} component={Products} />
            <Route path={routes.contact} component={Contact} />
            <Route path="/products/:name" component={SingleProduct} />
          </Switch>
        </MainTemplate>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
