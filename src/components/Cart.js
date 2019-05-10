import React from "react";
import store from "./store";

export default class Cart extends React.Component {
  render() {
    return <div>{store.getState().cart}</div>;
  }
}
