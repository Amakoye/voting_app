import React from "react";
import ReactDOM from "react-dom";
/* import App from "./App"; */
import "semantic-ui-css/semantic.min.css";
import ProductList from "./ProductList";

ReactDOM.render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>,
  document.getElementById("content")
);
