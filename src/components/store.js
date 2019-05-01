import React from 'react'
import { createStore } from 'redux';

let initialState = { products: [] };

function reducer(state = initialState, action){
    if (action === "ADD_PRODUCTS"){
        
    }

    return state;    
}


const store = createStore(reducer);
export default store;