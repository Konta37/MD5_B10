import React from "react";
import Nofication from "./nofication";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const listCart = useSelector((state) => state.cart);
  const dispath = useDispatch();
  console.log(listCart);
  return (
    <>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th width="4%">STT</th>
                    <th>Name</th>
                    <th width="15%">Price</th>
                    <th width="4%">Quantity</th>
                    <th width="25%">Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  {listCart.items.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">1</th>
                      <td>{item.name}</td>
                      <td>{item.totalPrice} vnd</td>
                      <td>
                        <input
                          name="cart-item-quantity-1"
                          type="number"
                          defaultValue={item.quantity}
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                        >
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          data-product=""
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>2</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      630 USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <Nofication />
        </div>
      </div>
    </>
  );
}
