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
    ],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("inc test");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("dec test");
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("incbyamount");
      state.value += action.payload;
    },
    removeItem: (state, e) => {
      console.log("remove test");
      state.products.splice(e, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, removeItem } =
  cart.actions;

export default cart.reducer;
