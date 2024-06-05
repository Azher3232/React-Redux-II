const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const existingItem = state.items.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...item, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };
    default:
      return state;
  }
};

export default cartReducer;
