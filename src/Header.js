import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import store from "./components/store";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Smartphone from "@material-ui/icons/Smartphone";
import Tv from "@material-ui/icons/Tv";
import Watch from "@material-ui/icons/Watch";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Build from "@material-ui/icons/Build";
import Lens from "@material-ui/icons/Lens";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Home from "@material-ui/icons/Home";
export const drawerWidth = 240; //exporting for styling in Products.js

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 0.5
  },
  myLink: {
    textDecoration: "none",
    color: "inherit"
  },
  categories: {
    textTransform: "Capitalize"
  }
});
//copied from Material-UI drawers examples
class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  renderCategoriesIcons(category) {
    switch (category) {
      case "phone":
        return (
          <ListItemIcon>
            <Smartphone />
          </ListItemIcon>
        );
      case "tv":
        return (
          <ListItemIcon>
            <Tv />
          </ListItemIcon>
        );
      case "small-appliance":
        return (
          <ListItemIcon>
            <Build />
          </ListItemIcon>
        );
      case "refrigerator":
        return (
          <ListItemIcon>
            <Lens />
          </ListItemIcon>
        );
      case "watch":
        return (
          <ListItemIcon>
            <Watch />
          </ListItemIcon>
        );
      case "action-camera":
        return (
          <ListItemIcon>
            <PhotoCamera />
          </ListItemIcon>
        );
      default:
        return "";
    }
  }

  renderCategories() {
    return store.getState().categories.map((category, idx) => {
      return (
        <ListItem button key={category}>
          {this.renderCategoriesIcons(category)}
          <ListItemText primary={category} />
        </ListItem>
      );
    });
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List className={classes.categories}>{this.renderCategories()}</List>
        <Divider />
        <List>
          <Link to="/cart" />
          <ListItem button>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText>Your Cart</ListItemText>
          </ListItem>
          <Link className={classes.myLink} to="/">
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <Paper elevation={4} className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h3" color="inherit" noWrap>
              <Link className={classes.myLink} to="/">
                Kaleb Co.
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </Paper>
    );
  }
}
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
