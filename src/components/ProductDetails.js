import React from "react";
import store from "./store";
import { withStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../Header";
import {
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  CardActions
} from "@material-ui/core";
import { Link } from "react-router-dom";

//styles for products
const styles = () => ({
  root: {
    marginLeft: `${drawerWidth}px !important`
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  },
  card: {
    maxWidth: "50%"
  },
  image: {
    height: "50vh",
    backgroundSize: "contain"
  }
});
class ProductDetails extends React.Component {
  productId = this.props.match.params.productId;
  getProductInfo() {
    console.log(store.getState().products, "productdetails store");
    return store.getState().products.find(prod => prod.id == this.productId); //the double == is necessary here. Taking advantage of javascript Type Coercion
  }
  render() {
    const { classes } = this.props;
    const product = this.getProductInfo();
    return (
      <div className={classes.root}>
        <Card className={classes.card} raised={false}>
          <CardHeader title={product.title} />
          <CardMedia
            className={classes.image}
            image={product.img}
            alt={product.title}
          />
          <CardHeader title={`$${product.price}`} />
          <CardContent>
            <Typography component="p">
              {this.getProductInfo().description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link className={classes.link} to="/">
              <Button variant="flat">BACK</Button>
            </Link>
            <Button variant="flat">Add To Cart</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProductDetails);
