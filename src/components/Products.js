import React from "react";
import store from "./store";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import "../style/Products.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { withStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../Header";

//styles for products
const styles = theme => ({
  root: {
    marginLeft: `${drawerWidth}px !important`
  }
});

class Products extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
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
    fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/categories")
      .then(response => {
        return response.json();
      })
      .then(cats => {
        store.dispatch({
          type: "ADD_CATEGORIES",
          categories: cats
        });
      });
  }

  //gets the products from the store. Renders each product as a GridListTile with Links
  renderProducts() {
    console.log(store);
    return store.getState().products.map(product => {
      return (
        <GridListTile rows={1} key={product.img} cols={GridListTile.cols || 1}>
          <img src={product.img} alt={product.title} />
          <Link to={`/products/${product.id}`}>
            <GridListTileBar title={product.title} />
          </Link>
        </GridListTile>
      );
    });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <GridList cellHeight={300} cols={4} classes={{ root: classes.root }}>
          {this.renderProducts()}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Products);
