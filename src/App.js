import React from "react";
import "./App.css";
import ProductList from "./ProductList";

class App extends React.Component {
  render() {
    return (
      <div class="main ui text container">
        <h1 class="ui dividing centered header">Popular Products</h1>
        <div id="content"></div>
      </div>
    );
  }
}

export default App;
