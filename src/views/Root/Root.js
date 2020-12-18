import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import emailjs from "emailjs-com";
import MainTemplate from "../../templates/MainTemplate";
import RootContext from "../../context/context";
import { client } from "../../data/contentfulData";
import Router from "../../routing/Router";
import {
  getCartFromLocalStorage,
  getCounterFromLocalStorage,
} from "../../utils/getElementFromLocalStorage";

const Root = () => {
  const [cartCounter, setCartCounter] = useState(getCounterFromLocalStorage());
  const [products, setProducts] = useState([]);
  const [productsToFilter, setProductsToFilter] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [wishlist, setWishlist] = useState([...new Set([])]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [filterToRemove, setFilterToRemove] = useState([]);
  const [cartTotal, setCartTotal] = useState(10);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [bestsellers, setBestsellers] = useState([]);
  const [emerald, setEmerald] = useState([]);
  const [ruby, setRuby] = useState([]);

  const setCounterToLocalStorage = () => {
    localStorage.setItem("cartCounter", JSON.stringify(cartCounter));
  };
  const setCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  useEffect(() => {
    setCartToLocalStorage();
    setCounterToLocalStorage();
  }, [cart, cartCounter]);

  const setContentfulData = (data) => {
    if (data.length !== 0) {
      let products = data.map((item) => {
        const image = item.fields.productImage.fields.file.url;
        const category = item.fields.categories;
        const categories = Object.values(category);
        const product = { ...item.fields, categories };

        product.productImage = image;
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
    cart.forEach((item) => {
      item.productQuantity = 1;
    });
    setCart([]);
  };

  const increaseItemCounter = (productName) => {
    cart.forEach((item) => {
      if (item.productName === productName) {
        item.productQuantity = item.productQuantity + 1;
      }
    });
    increaseCartCounter();
  };
  const decreaseItemCounter = (productName) => {
    cart.forEach((item) => {
      if (item.productName === productName && item.productQuantity > 1) {
        item.productQuantity = item.productQuantity - 1;
        decreaseCartCounter();
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

    if (cart.filter((e) => e.productName === `${productName}`).length > 0) {
      setCart([...new Set([...cart])]);
    } else {
      setCart([...new Set([...cart, ...filteredProducts])]);
    }
  };

  const removeProductFromCart = (productName, productQuantity) => {
    const filteredProducts = cart.filter((product) => {
      if (product.productName === productName) {
        product.productQuantity = 1;
      }
      return product.productName !== productName;
    });
    setCartCounter(cartCounter - productQuantity);

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

  const removeFilterCategory = (e) => {
    let filterAttribute = e.target.getAttribute("data-target");

    const filterToBeRemoved = filterToRemove.filter((filter) => {
      return filter !== filterAttribute;
    });
    setFilterToRemove(filterToBeRemoved);

    const checkIfOneArrayIncludesOther = (arr, target) =>
      target.every((item) => arr.includes(item));

    const filteredProducts = productsToFilter.filter((product) => {
      if (
        checkIfOneArrayIncludesOther(product.categories, filterToBeRemoved) ===
        true
      ) {
        return product;
      }
    });
    setProducts([...filteredProducts]);
  };
  const filterProductsBySearchInput = (e) => {
    e.preventDefault();
    let temporary = [...productsToFilter];
    let tempProducts = [...temporary];
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

    emailjs
      .sendForm(
        "service_plarh0j",
        "template_7bbl3dd",
        e.target,
        "user_oRqOU5S9CjVoFm0t7S0mI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsChecked(false);
    e.target.reset();
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
          <Router />
        </MainTemplate>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
