export const getCartFromLocalStorage = () => {
  let localStorageCart;
  if (localStorage.getItem("cart")) {
    localStorageCart = JSON.parse(localStorage.getItem("cart"));
  } else {
    localStorageCart = [];
  }
  return localStorageCart;
};
export const getCounterFromLocalStorage = () => {
  let localStorageCounter;
  if (localStorage.getItem("cartCounter")) {
    localStorageCounter = JSON.parse(localStorage.getItem("cartCounter"));
  } else {
    localStorageCounter = 0;
  }

  return localStorageCounter;
};

export const getWishlistFromLocalStorage = () => {
  let localStorageWishlist;
  if (localStorage.getItem("wishlist")) {
    localStorageWishlist = JSON.parse(localStorage.getItem("wishlist"));
  } else {
    localStorageWishlist = [];
  }

  return localStorageWishlist;
};
