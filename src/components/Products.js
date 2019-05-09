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
  Button
} from "@material-ui/core";
import "../style/Products.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../Header";

//styles for products
const styles = theme => ({
  root: {
    marginLeft: `${drawerWidth}px`
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
  },
  gridList: {},
  image: {
    height: "30vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
    // backgroundImage: "url(" + {background} + ")"
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
    const { classes, theme } = this.props;
    console.log(store);
    return store.getState().products.map(product => {
      return (
        <Grid sm={10} md={8} lg={4} item={true}>
          <Card raised={false}>
            <CardHeader title={product.title} />
            <CardMedia
              className={classes.image}
              image={product.img}
              alt={product.title}
            />
            <CardHeader title={`$${product.price}`} />
            <CardContent>
              <Typography component="p">{product.description}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Add To Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <Paper elevation={2} className={classes.root}>
        <Grid spacing={8} container={true} justify="space-evenly">
          {this.renderProducts()}
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Products);
