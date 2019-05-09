import { createStore } from "redux";

const initialState = {
  products: [],
  selectedCategory: "",
  categories: [],
  selectedCategories: [],
  selectedProduct: {},
  cart: []
};

function reducer(state = initialState, action) {
  console.log("reducer called");
  console.log(action.type, action.products);
  switch (action.type) {
    default:
      return state;
    case "ADD_PRODUCTS":
      return Object.assign({}, state, { products: action.products });
    case "ADD_CATEGORIES":
      return Object.assign({}, state, { categories: action.categories });
  }
}

const store = createStore(reducer);

export default store;
