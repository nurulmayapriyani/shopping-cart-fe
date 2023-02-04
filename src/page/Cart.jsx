import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../page-style/CartStyleDesktop.css";
import { decrement, increment, removeItem } from "../redux/reducer/cartItems";

const Cart = () => {
  const count = useSelector((state) => state.cartItems.value);
  const products = useSelector((state) => state.cartItems.products);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="title">
        <h3>Shopping Cart</h3>
      </div>
      <div className="shop">
        <div id="shop-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Cart ({products.length} {products.length > 1 ? "Items" : "Item"}
                )
              </h5>
              {products.map((item) => (
                <div id="cart-item">
                  <img src={item.image} />
                  <div className="cart-detail">
                    <span className="product-name">{item.name}</span>
                    <span className="input-group" id="input">
                      <button
                        id="decrement-btn"
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => dispatch(decrement())}
                      >
                        -
                      </button>
                      <input defaultValue={1} value={count} />
                      <button
                        id="increment-btn"
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => dispatch(increment())}
                      >
                        +
                      </button>
                    </span>
                    <p>
                      Category: {item.category}
                      <br />
                      Color: {item.color}
                      <br />
                      Size: {item.size}
                    </p>
                    <button
                      className="btn btn-light"
                      id="remove-btn"
                      onClick={() => dispatch(removeItem())}
                    >
                      <i className="bi bi-trash-fill"></i> Remove Item
                    </button>
                    <button className="btn btn-light" id="wishlist-btn">
                      <i className="bi bi-heart-fill"></i> Move to Wishlist
                    </button>
                    <span className="product-price">
                      ${item.price.toLocaleString("en-US")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card" id="shop-total">
          <div className="card-body">
            <h5 className="card-title">The total amount of</h5>
            <div className="text-total-temporary">
              <span>Temporary Amount</span>
              <span className="temporary-amount">$!dummy!</span>
            </div>
            <br />
            <span>Shipping</span>
            <span className="shipping-amount">Free</span>
            <br />
            <hr className="line" />
            <span className="text-vat-total">The total amount of</span>
            <span className="vat-total">$!dummy!</span>
            <br />
            <span className="text-vat-total">(including vat)</span>
            <br />
            <a href="#" id="checkout-btn" className="btn btn-primary">
              GO TO CHECKOUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
