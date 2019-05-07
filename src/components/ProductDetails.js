import React from "react";
import store from "./store";
import { withStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../Header";
import { Paper } from "@material-ui/core";

//styles for products
const styles = theme => ({
  root: {
    marginLeft: `${drawerWidth}px !important`
  }
});
class ProductDetails extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <Paper classes={{ root: classes.root }}>
        <div>
          {this.props.match.params.productId}
          wordssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProductDetails);
