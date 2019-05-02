import { createStore } from 'redux';

let initialState = { products: [] };

function reducer(state = initialState, action){
    console.log('reducer called');
    console.log(action.type, action.products);    
    if (action.type === "ADD_PRODUCTS"){
        console.log('adding products');
        
        return Object.assign({}, state, {products: action.products})
    } else {
        return state;
    }
}

const store = createStore(reducer);
export default store;