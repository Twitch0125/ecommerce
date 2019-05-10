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
import { Star } from "@material-ui/icons/Star";

//styles for products
const styles = theme => ({
  root: {
    marginLeft: `${drawerWidth}px`
  },
  image: {
    height: "30vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  "@media screen and (max-width: 600px)": {
    root: {
      marginLeft: "0px"
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
  card: {}
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

  // renderRating(rating){
  //   if(rating % 0.5 != 0)
  // }

  //gets the products from the store. Renders each product as a GridListTile with Links
  renderProducts() {
    const { classes, theme } = this.props;
    console.log(store);
    return store.getState().products.map(product => {
      return (
        <Grid sm={10} md={6} lg={4} item={true}>
          <Card className={classes.card} raised={true}>
            <CardHeader className={classes.cardHead} title={product.title} />
            <CardMedia
              className={classes.image}
              image={product.img}
              alt={product.title}
            />
            <div className={classes.price}>
              <CardHeader title={`$${product.price}`} />
              <span>
                <CardHeader title={`${product.rating}`} />
                <Icon>star</Icon>
              </span>
            </div>

            <CardContent>
              <Typography component="p">{product.description}</Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button variant="text">Add To Cart</Button>
              <Link to={`/products/${product.id}`} className={classes.myLink}>
                <Button variant="text">More Info</Button>
              </Link>
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
        <Grid spacing={16} container={true} justify="space-evenly">
          {this.renderProducts()}
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Products);
