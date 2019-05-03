import React from "react";
import "./style/App.css";
import Products from "./components/Products";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
