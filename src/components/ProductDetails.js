import React from "react";
import store from "./store";
import { withStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../Header";
import { Paper, Button, Typography, GridListTile } from "@material-ui/core";
import { Link } from "react-router-dom";

//styles for products
const styles = theme => ({
  root: {
    marginLeft: `${drawerWidth}px !important`
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  },
  image: {}
});
class ProductDetails extends React.Component {
  productId = this.props.match.params.productId;
  // componentDidMount(){
  //   if(productId = )
  // }
  getProductInfo() {
    console.log(store.getState().products, "productdetails store");
    return store.getState().products.find(prod => prod.id == this.productId);
  }
  render() {
    const { classes, theme } = this.props;
    const product = this.getProductInfo();
    return (
      <Paper className={classes.root}>
        <Typography variant="h3">{this.getProductInfo().title}</Typography>
        <img src={product.img} alt={product.title} />
        <Typography variant="body1">
          {this.getProductInfo().description}
        </Typography>

        <Link className={classes.link} to="/">
          <Button variant="fab">BACK</Button>
        </Link>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProductDetails);
