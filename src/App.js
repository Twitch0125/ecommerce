import React from "react";
import "./style/App.css";
import Products from "./components/Products";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import CssBaseline from "@material-ui/core/CssBaseline";
import Cart from "./components/Cart";
import store from "./components/store";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ab4967",
      contrastText: "#dcd4e1"
    },
    secondary: {
      main: "#0c1713",
      contrastText: "#ab4967"
    }
  }
});

class App extends React.Component {
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

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route
              exact
              path="/products/:productId"
              component={ProductDetails}
            />
            <Route exact path="/cart" component={Cart} />
            <Redirect to="/" />
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
