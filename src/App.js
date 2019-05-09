import React from "react";
import "./style/App.css";
import Products from "./components/Products";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import { Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline"


function App() {
  
  return (
    <div className="App">
      <CssBaseline  />
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products/:productId" component={ProductDetails}  />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
