import React from "react";
import store from "./store";
import { GridList, GridListTile } from "@material-ui/core";

export default class Products extends React.Component {
  componentDidMount() {
      store.subscribe( () => this.forceUpdate() )
    fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products")
      .then(response => {
        return response.json();
      })
      .then(prods => {
        store.dispatch({
          type: "ADD_PRODUCTS",
          products: prods
        });
      });
  }
  renderProducts() {
      console.log(store);
      
    return store.getState().products.map(product => {
      return  (
        <GridListTile key={product.img} cols={GridListTile.cols || 1}>
            <img src={product.img} alt={product.title} />
        </GridListTile>
        ) 
    });
  }

  render() {
    return (
        <div>
        <GridList cellHeight={160} cols={3}>
        {this.renderProducts()}
        </GridList>
        </div>
    ) 
  }
}
