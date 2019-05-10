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

  addToCart(product) {
    console.log("adding to cart", product);
    store.dispatch({
      type: "ADD_TO_CART",
      product: product
    });
    console.log("cart now contains:", store.getState().cart);
  }

  renderRating(rating) {
    let stars = [];
    const getHalfStar = () => {
      if (rating % 1 >= 0.5) {
        //show a half star if its atleast got 0.5 after the integer. ex:  4.3 will have 4 fullstars but 4.5 will have 4fullstars and one halfstar
        return stars.push({ type: "HALF_STAR" });
      } else return <span />;
    };
    const pushStar = () => stars.push({ type: "FULL_STAR" });
    const getFullStar = () => {
      for (let i = 0; i < Math.floor(rating); i++) {
        pushStar();
      }
      getHalfStar();
    };
    getFullStar();
    return stars.map(star => {
      switch (star.type) {
        case "HALF_STAR": {
          return <Icon>star_half</Icon>;
        }
        case "FULL_STAR": {
          return <Icon>star</Icon>;
        }
        default: {
          return <span />;
        }
      }
    });
  }

  //gets the products from the store. Renders each product as a GridListTile with Links
  renderProducts() {
    const { classes, theme } = this.props;
    console.log(store);
    return store.getState().products.map(product => {
      return (
        <Grid sm={10} md={4} lg={3} item={true}>
          <Card className={classes.card} raised={true}>
            <CardHeader className={classes.cardHead} title={product.title} />
            <CardMedia
              className={classes.image}
              image={product.img}
              alt={product.title}
            />
            <div className={classes.price}>
              <CardHeader title={`$${product.price}`} />
              <span className={classes.rating}>
                <CardHeader title={`${product.rating}`} />
                {this.renderRating(product.rating)}
              </span>
            </div>
            <CardContent>
              <Typography className={classes.description} noWrap={true}>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button onClick={() => this.addToCart(product)} variant="text">
                Add To Cart
              </Button>
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
        <Grid spacing={40} container={true} justify="space-evenly">
          {this.renderProducts()}
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Products);
