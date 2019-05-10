import React from "react";
import store from "./store";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { drawerWidth } from "../Header";

const styles = theme => ({
  root: {
    marginLeft: `${drawerWidth + 8}px`
  }
});

class Cart extends React.Component {
  componentWillMount() {
    console.log("cart mounted, this is in the cart:", store.getState().cart);
  }

  renderProducts() {
    const { classes, theme } = this.props;
    store.getState().cart.map(product => {
      return <div>{product.title}</div>;
    });
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <Paper elevation={2} className={classes.root}>
        {this.renderProducts()}
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Cart);
