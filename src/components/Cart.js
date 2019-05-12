import React from "react";
import store from "./store";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  IconButton,
  Icon,
  Typography
} from "@material-ui/core";
const styles = theme => ({
  root: {
    margin: "0 auto",
    width: "50vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Cart extends React.Component {
  componentWillMount() {
    console.log("cart mounted, this is in the cart:", store.getState().cart);
  }

  handleClick(id) {
    store.subscribe(() => this.forceUpdate());
    store.dispatch({
      type: "REMOVE_FROM_CART",
      cartId: id
    });
  }

  renderProducts() {
    const { classes, theme } = this.props;

    return store.getState().cart.map(product => {
      return (
        <ListItem key={product.cartId}>
          <ListItemAvatar>
            <Avatar alt={product.title} src={product.img} />
          </ListItemAvatar>
          <ListItemText>{product.title}</ListItemText>
          <ListSubheader component="div">{`$${product.price}`}</ListSubheader>
          <ListItemIcon>
            <IconButton
              onClick={() => this.handleClick(product.cartId)}
              color="primary"
            >
              <Icon>delete_outline</Icon>
            </IconButton>
          </ListItemIcon>
        </ListItem>
      );
    });
  }

  render() {
    const { classes, theme } = this.props;
    if (store.getState().cart.length === 0) {
      return (
        <Typography className={classes.root} variant="h2">
          Your Cart Is Empty
        </Typography>
      );
    } else
      return (
        <Paper elevation={2} className={classes.root}>
          <List>{this.renderProducts()}</List>
        </Paper>
      );
  }
}

export default withStyles(styles, { withTheme: true })(Cart);
