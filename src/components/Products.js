import React from "react";
import store from "./store";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Icon
} from "@material-ui/core";
import "../style/Products.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../Header";
import Product from "./Product";

//styles for products
const styles = theme => ({
  root: {
    marginLeft: `${drawerWidth + 8}px`
  },
  image: {
    height: "30vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  "@media screen and (max-width: 600px)": {
    root: {
      marginLeft: "0px"
    },
    description: {
      whiteSpace: "normal"
    }
  },
  buttons: {
    justifyContent: "space-evenly"
  },
  myLink: {
    textDecoration: "none",
    color: "inherit"
  },
  price: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  card: {},
  rating: {
    display: "flex",
    alignItems: "center"
  }
});

class Products extends React.Component {
  renderCard(product) {
    const { classes, theme } = this.props;
    return <Product product={product} />;
  }

  //gets the products from the store. Renders each product as a GridListTile with Links
  renderProducts(category) {
    const { classes, theme } = this.props;
    console.log(store);
    if (category != "") {
      let filterredProducts = store
        .getState()
        .products.filter(prod => prod.category == category);
      return filterredProducts.map(product => this.renderCard(product));
    } else if (category == "") {
      return store.getState().products.map(product => this.renderCard(product));
    }
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <Paper elevation={2} className={classes.root}>
        <Grid spacing={40} container={true} justify="space-evenly">
          {this.renderProducts(store.getState().selectedCategory)}
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Products);
