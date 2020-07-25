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
import { client } from "../../data/contentfulData";
import Wishlist from "../../components/wishlist/Wishlist";

const Root = () => {
  const initialState = [...productsDataArray];
  const [cartCounter, setCartCounter] = useState(0);
  const [products, setProducts] = useState([]);
  const [productsToFilter, setProductsToFilter] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [cart, setCart] = useState([...new Set([])]);
  const [wishlist, setWishlist] = useState([...new Set([])]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [filterToRemove, setFilterToRemove] = useState([]);
  const [cartTotal, setCartTotal] = useState(10);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [bestsellers, setBestsellers] = useState([]);
  const [emerald, setEmerald] = useState([]);
  const [ruby, setRuby] = useState([]);

  const setContentfulData = (data) => {
    if (data.length !== 0) {
      let products = data.map((item) => {
        const image = item.fields.productImage.fields.file.url;
        const category = item.fields.categories;
        const categories = Object.values(category);
        const product = { ...item.fields, image, categories };
        return product;
      });
      setProducts(products);
      setProductsToFilter(products);

      const sortingAlgorithm = (firstProduct, secondProduct) =>
        firstProduct.productId - secondProduct.productId;

      const sortedProducts = products.sort(sortingAlgorithm);
      let bestseller = [];
      bestseller.push(sortedProducts[0], sortedProducts[18]);
      let emerald = [];
      emerald.push(sortedProducts[12], sortedProducts[43]);
      let ruby = [];
      ruby.push(sortedProducts[45], sortedProducts[47]);

      setBestsellers(bestseller);
      setEmerald(emerald);
      setRuby(ruby);
    }
  };

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
  const addProductToWishlist = (productName) => {
    const filteredProducts = products.filter(
      (product) => product.productName === productName
    );
    setWishlist([...new Set([...wishlist, ...filteredProducts])]);
  };

  const removeProductFromWishlist = (productName) => {
    const filteredProducts = wishlist.filter(
      (product) => product.productName !== productName
    );

    setWishlist([...new Set([...filteredProducts])]);
  };

  const handleWishlist = (productName) => {
    products.map((item) => {
      if (item.productName === productName) {
        if (wishlist.length > 0 && item.wishList === true) {
          removeProductFromWishlist(productName);
          item.wishList = false;
        } else if (item.wishList === false) {
          addProductToWishlist(productName);
          item.wishList = true;
        }
      }
    });
  };

  const openWishlistPopUp = () => {
    setOpenPopUp(true);
    setTimeout(() => {
      setOpenPopUp(false);
    }, 3000);
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

    if (filterAttribute === null) {
    } else {
      const filteredProducts = products.filter((product) =>
        product.categories.includes(filterAttribute)
      );
      setProducts([...filteredProducts]);
      const filterCategory = categoryFilter.concat(filterAttribute);
      setCategoryFilter([...filterCategory]);
      const filterCancel = filterToRemove.concat(filterAttribute);
      setFilterToRemove([...filterCancel]);
    }
  };

  const categoryCondition = (category, filterAttribute) => {
    if (category === filterAttribute) {
      const indexOfCategory = categoryFilter.indexOf(category);
      categoryFilter.splice(indexOfCategory, 1);
      setCategoryFilter([...categoryFilter]);
    }
  };
  const removeFilterCategory = (e) => {
    let filterAttribute = e.target.getAttribute("data-target");
    setFilterToRemove(
      filterToRemove.filter((filter) => {
        return filter !== filterAttribute;
      })
    );
    let number = categoryFilter.length;

    switch (true) {
      case number <= 1:
        getContentfulData();
        setCategoryFilter([]);
        break;
      case number === 2:
        categoryFilter.filter((category) => {
          categoryCondition(category, filterAttribute);
          const filteredProducts = productsToFilter.filter((product) =>
            product.categories.includes(...categoryFilter)
          );

          setProducts([...filteredProducts]);
        });
        break;

      case number === 3:
        categoryFilter.filter((category) => {
          categoryCondition(category, filterAttribute);
          const filteredProducts = productsToFilter.filter(
            (product) =>
              product.categories.includes(categoryFilter[0]) &&
              product.categories.includes(categoryFilter[1])
          );
          setProducts([...filteredProducts]);
        });

        break;
      default:
        categoryFilter.filter((category) => {
          categoryCondition(category, filterAttribute);
          const filteredProducts = productsToFilter.filter(
            (product) =>
              product.categories.includes(categoryFilter[0]) &&
              product.categories.includes(categoryFilter[1]) &&
              product.categories.includes(categoryFilter[2])
          );

          setProducts([...filteredProducts]);
        });
    }
  };
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
    getContentfulData();
    setCategoryFilter([]);
    setFilterToRemove([]);
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

  const clearCartCounter = () => {
    setCartCounter(0);
  };

  useEffect(() => {
    handleCalculateCartTotals();
  }, [cart, cartCounter]);

  const sendQuestion = (e) => {
    e.preventDefault();
    e.target.reset();
    setIsChecked(false);
  };
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "jewelryShop",
      })
      .then((response) => {
        setContentfulData(response.items);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getContentfulData();
  }, []);

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
          handleDuplicateNamesOfProducts,
          increaseItemCounter,
          decreaseItemCounter,
          removeFilterCategory,
          bestsellers,
          emerald,
          ruby,
          clearCart,
          cartTotal,
          clearCartCounter,
          sendQuestion,
          handleChange,
          isChecked,
          filterToRemove,
          addProductToWishlist,
          removeProductFromWishlist,
          handleWishlist,
          wishlist,
          openWishlistPopUp,
          openPopUp,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.products} component={Products} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.list} component={Wishlist} />
            <Route path="/products/:name" component={SingleProduct} />
          </Switch>
        </MainTemplate>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
