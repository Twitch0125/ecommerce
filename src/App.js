import React from "react";
import "./style/App.css";
import Products from "./components/Products";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products/:productId" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
