import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../page-style/CartStyleDesktop.css";

const Cart = () => {
  const products = [
    {
      id: 1,
      image: "hoodie.jpg",
      name: "Brown Hoodie",
      category: "Hoodie",
      color: "Brown",
      size: "M",
      price: 20.78,
    },
    {
      id: 2,
      image: "blazer.jpg",
      name: "Green-Army Blazer",
      category: "Blazer",
      color: "Green-Army",
      size: "L",
      price: 30.88,
    },
    {
      id: 3,
      image: "skirt.jpg",
      name: "Orange Skirt",
      category: "Skirt",
      color: "Orange",
      size: "M",
      price: 35.67,
    },
    {
      id: 4,
      image: "jacket.jpg",
      name: "Navy Jacket",
      category: "Jacket",
      color: "Navy",
      size: "L",
      price: 25.49,
    },
    {
      id: 5,
      image: "trouser.jpg",
      name: "Black Trouser",
      category: "Trouser",
      color: "Black",
      size: "L",
      price: 31.93,
    },
  ];

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
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        -
                      </button>
                      <input
                      // type="number"
                      // defaultValue={1}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
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
                    <button className="btn btn-light" id="remove-btn">
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
