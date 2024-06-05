export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (productID) => ({
  type: "REMOVE_FROM_CART",
  payload: productID,
});

export const getProducts = () => ({
  type: "GET_PRODUCTS",
});
