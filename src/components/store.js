import { createStore } from "redux";

const initialState = {
  products: [],
  categories: [],
  selectedCategory: "",
  cart: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case "ADD_PRODUCTS":
      return Object.assign({}, state, { products: action.products });
    case "ADD_CATEGORIES":
      return Object.assign({}, state, { categories: action.categories });
    case "ADD_TO_CART":
      return Object.assign({}, state, {
        cart: [...state.cart, action.product]
      });
    case "REMOVE_FROM_CART":
      let newCart = state.cart.filter(
        product => product.cartId !== action.cartId
      );
      console.log("removed item from cart. newCart: ", newCart);
      return Object.assign({}, state, {
        cart: newCart
      });
    case "SET_SELECTED_CATEGORY":
      return Object.assign({}, state, { selectedCategory: action.category });
  }
}

const store = createStore(reducer);

export default store;
