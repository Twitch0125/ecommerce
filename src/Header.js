import {
  AppBar,
  Badge,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';
import {
  Build,
  ClearAll,
  Home,
  Lens,
  Menu,
  PhotoCamera,
  ShoppingCart,
  Smartphone,
  Tv,
  Watch
} from '@material-ui/icons';

import { Link } from 'react-router-dom';
import React from 'react';
import store from './components/store';

export const drawerWidth = 240; //exporting for styling in Products.js

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: theme.palette.primary.main
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
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
    textDecoration: 'none',
    color: 'inherit'
  },
  categories: {
    textTransform: 'Capitalize'
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
      case 'phone':
        return (
          <ListItemIcon>
            <Smartphone />
          </ListItemIcon>
        );
      case 'tv':
        return (
          <ListItemIcon>
            <Tv />
          </ListItemIcon>
        );
      case 'small-appliance':
        return (
          <ListItemIcon>
            <Build />
          </ListItemIcon>
        );
      case 'refrigerator':
        return (
          <ListItemIcon>
            <Lens />
          </ListItemIcon>
        );
      case 'watch':
        return (
          <ListItemIcon>
            <Watch />
          </ListItemIcon>
        );
      case 'action-camera':
        return (
          <ListItemIcon>
            <PhotoCamera />
          </ListItemIcon>
        );
      default:
        return '';
    }
  }

  handleClick(category) {
    store.dispatch({
      type: 'SET_SELECTED_CATEGORY',
      category: category
    });
  }

  renderCategories() {
    return store.getState().categories.map((category, idx) => {
      return (
        <ListItem
          onClick={() => this.handleClick(category)}
          button
          key={category}
        >
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
        <Link className={classes.myLink} to='/'>
          <List className={classes.categories}>
            {this.renderCategories()}

            <ListItem onClick={() => this.handleClick('')} button key={''}>
              <ListItemIcon>
                <ClearAll />
              </ListItemIcon>
              <ListItemText>Show All Items</ListItemText>
            </ListItem>
          </List>
        </Link>
        <Divider />
        <List>
          <Link className={classes.myLink} to='/cart'>
            <ListItem button={true}>
              <Badge
                badgeContent={store.getState().cart.length}
                color='primary'
              >
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
              </Badge>
              <ListItemText>Your Cart</ListItemText>
            </ListItem>
          </Link>
          <Link className={classes.myLink} to='/'>
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
        <AppBar position='fixed' className={classes.appBar} color='primary'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>

            <Typography variant='h3' color='inherit' noWrap>
              <Link className={classes.myLink} to='/'>
                Kaleb Co.
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation='css'>
            <Drawer
              container={this.props.container}
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant='permanent'
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
