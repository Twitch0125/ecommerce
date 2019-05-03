import { createStore } from "redux";

const initialState = { products: [], selectedCategory: "", categories: [] };

function reducer(state = initialState, action) {
  console.log("reducer called");
  console.log(action.type, action.products);
  if (action.type === "ADD_PRODUCTS") {
    console.log("adding products");
    return Object.assign({}, state, { products: action.products });
  } else if (action.type === "ADD_CATEGORIES") {
    console.log("adding categories");
    return Object.assign({}, state, { categories: action.categories });
  } else {
    return state;
  }
}

const store = createStore(reducer);

export default store;
