import React from "react";
import "../App.css";
import "../assets/bootstrap.min.css"
import Header from "../components/header";
import Cart from "../components/cart";
import ListProduct from "../components/ListProduct";

export default function CartPage() {
  return (
    <>
      <div className="container">
        <Header/>
        <div className="row">
          <ListProduct/>
          <Cart/>
        </div>
      </div>
    </>
  );
}
