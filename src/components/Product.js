import '../style/Products.css';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Icon,
  Typography,
  withStyles
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';
import { drawerWidth } from '../Header';
import store from './store';

const uuidv4 = require('uuid/v4');

const styles = () => ({
  root: {
    marginLeft: `${drawerWidth + 8}px`
  },
  image: {
    height: '30vh',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  '@media screen and (max-width: 600px)': {
    root: {
      marginLeft: '0px'
    },
    description: {
      whiteSpace: 'normal'
    }
  },
  buttons: {
    justifyContent: 'space-evenly'
  },
  myLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  price: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  card: {},
  rating: {
    display: 'flex',
    alignItems: 'center'
  }
});

class Product extends React.Component {
  renderRating(rating) {
    let stars = [];
    const getHalfStar = () => {
      if (rating % 1 >= 0.5) {
        //show a half star if its atleast got 0.5 after the integer. ex:  4.3 will have 4 fullstars but 4.5 will have 4fullstars and one halfstar
        return stars.push({ type: 'HALF_STAR' });
      } else return <span />;
    };
    const pushStar = () => stars.push({ type: 'FULL_STAR' });
    const getFullStar = () => {
      for (let i = 0; i < Math.floor(rating); i++) {
        pushStar();
      }
      getHalfStar();
    };
    getFullStar();
    return stars.map(star => {
      switch (star.type) {
        case 'HALF_STAR': {
          return <Icon color='primary'>star_half</Icon>;
        }
        case 'FULL_STAR': {
          return <Icon color='primary'>star</Icon>;
        }
        default: {
          return <span />;
        }
      }
    });
  }

  addToCart(product) {
    console.log('adding to cart', product);
    let uuid = uuidv4();
    store.dispatch({
      type: 'ADD_TO_CART',
      product: { ...product, cartId: uuid }
    });
    console.log('cart now contains:', store.getState().cart);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid sm={10} md={4} lg={3} item={true}>
        <Card className={classes.card} raised={true}>
          <CardHeader
            className={classes.cardHead}
            title={this.props.product.title}
          />
          <CardMedia
            className={classes.image}
            image={this.props.product.img}
            alt={this.props.product.title}
          />
          <div className={classes.price}>
            <CardHeader
              titleTypographyProps={{ color: 'default' }}
              title={`$${this.props.product.price}`}
            />
            <span className={classes.rating}>
              <CardHeader title={`${this.props.product.rating}`} />
              {this.renderRating(this.props.product.rating)}
            </span>
          </div>
          <CardContent>
            <Typography className={classes.description} noWrap={true}>
              {this.props.product.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.buttons}>
            <Button
              color='primary'
              onClick={() => this.addToCart(this.props.product)}
              variant='outlined'
            >
              Add To Cart
            </Button>
            <Link
              to={`/products/${this.props.product.id}`}
              className={classes.myLink}
            >
              <Button color='primary' variant='outlined'>
                More Info
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(Product);
