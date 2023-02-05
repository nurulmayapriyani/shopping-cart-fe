import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../page-style/CartStyleDesktop.css";
import "../page-style/CartStyleTablet.css";
import "../page-style/CartStyleMobile.css";
import { updateItemQuantity, removeItem, moveToWishlistItem } from "../redux/reducer/cartItems";

const Cart = () => {
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
              {products.map((item,index) => (
                <div id="cart-item" key={item.id}>
                  <img src={item.image} />
                  <div className="cart-detail">
                    <span className="product-name">{item.name}</span>
                    <span className="input-group" id="input">
                      <button
                        id="decrement-btn"
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        onClick={() => dispatch(updateItemQuantity({index: index, qty: item.qty -1}))}
                      >
                        -
                      </button>
                      <input defaultValue={1} value={item.qty} />
                      <button
                        id="increment-btn"
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        onClick={() => dispatch(updateItemQuantity({index: index, qty: item.qty +1}))}
                      >
                        +
                      </button>
                    </span>
                    <span className="cart-detail-2">
                      Category: {item.category}
                      <br />
                      Color: {item.color}
                      <br />
                      Size: {item.size}
                    </span>
                    <br/>
                    <button
                      className="btn btn-light"
                      id="remove-btn"
                      onClick={() => dispatch(removeItem(index))}
                    >
                      <i className="bi bi-trash-fill"></i> Remove Item
                    </button>
                    <button className="btn btn-light" id="wishlist-btn"
                    onClick={() => dispatch(moveToWishlistItem(index))}
                    >
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
