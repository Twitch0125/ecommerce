import React from "react";
import store from "./store";
import { withStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../Header";

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
      <div classes={{ root: classes.root }}>
        {this.props.match.params.productId}
        wordssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProductDetails);
