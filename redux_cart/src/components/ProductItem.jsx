import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductItem() {
  const listProducts = useSelector((state) => state.product);
  const dispath = useDispatch();


  const handleAddToCart = (product) => {
    dispath({
      type: "addToCart",
      payload: {
        product: product,
        quantity: 1,
      },
    });
  };
  return (
    <>
      {listProducts.map((product, index) => (
        <div key={product.id}>
          <div className="media product">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={product.img} alt="" />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{product.name}</h4>
              <p>{product.description}</p>
              {product.quantity === 0 ? (
                <>
                  <span className="price"> {product.price} vnd</span>
                </>
              ) : (
                <>
                  <input
                    name="quantity-product-1"
                    type="number"
                    defaultValue={1}
                  />
                  <a data-product={1} className="price">
                    15 USD{" "}
                  </a>
                  <button onClick={()=>handleAddToCart(product)}>Add</button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
