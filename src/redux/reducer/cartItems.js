import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cartItems",
  initialState: {
    value: 1,
    products: [
      {
        id: 1,
        image: "hoodie.jpg",
        name: "Brown Hoodie",
        category: "Hoodie",
        color: "Brown",
        size: "M",
        price: 20.78,
        qty: 1
      },
      {
        id: 2,
        image: "blazer.jpg",
        name: "Green-Army Blazer",
        category: "Blazer",
        color: "Green-Army",
        size: "L",
        price: 30.88,
        qty: 1
      },
      {
        id: 3,
        image: "skirt.jpg",
        name: "Orange Skirt",
        category: "Skirt",
        color: "Orange",
        size: "M",
        price: 35.67,
        qty: 1
      },
      {
        id: 4,
        image: "jacket.jpg",
        name: "Navy Jacket",
        category: "Jacket",
        color: "Navy",
        size: "L",
        price: 25.49,
        qty: 1
      },
      {
        id: 5,
        image: "trouser.jpg",
        name: "Black Trouser",
        category: "Trouser",
        color: "Black",
        size: "L",
        price: 31.93,
        qty: 1
      },
    ],
  },

  reducers: {
    incrementByAmount: (state, action) => {
      console.log("incbyamount");
      state.value += action.payload;
    },
    removeItem: (state,e) => {
      console.log("remove test", e.payload);
      state.products.splice(e.payload,1)
    },
    moveToWishlistItem: (state,e, qty) => {
      console.log("move test", e.payload, qty);
      state.products.splice(e.payload,1)
    },
    updateItemQuantity: (state, e) => {
      console.log("update test", e.payload)
      if(e.payload.qty === 1 || e.payload.qty > 1){
      state.products[e.payload.index].qty = e.payload.qty}
    }
  },
});

// Action creators are generated for each case reducer function
export const { updateItemQuantity, incrementByAmount, removeItem, moveToWishlistItem } =
  cart.actions;

export default cart.reducer;
