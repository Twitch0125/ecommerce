import { createStore } from "redux";

const initialState = {
  products: [],
  categories: [],
  selectedCategories: [],
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
  }
}

const store = createStore(reducer);

export default store;
