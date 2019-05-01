import React from "react";
import store from './store';

// const products = () => {

// }

// function fetchProducts(){
//     return fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
// }

export default class Products extends React.Component {
    state = {
        products: []
    }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products").then(response => {
        return response.json()
    }).then(prods => {
        // store.dispatch({
        //     type: 'ADD_PRODUCTS',
        //     products: prods
        // })
        this.setState({
            products: prods
        })
    })
  }
  renderProducts(){
      return this.state.products.map(product => {
          return (<div>{product.title}</div>)
      })
  }

  render() {
      
    return (<div>{
        this.renderProducts()
    }</div>);
  }
}
