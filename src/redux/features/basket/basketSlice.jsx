import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const productToAdd = action.payload.products;

      const existingProductIndex = state.basket.findIndex(item => item.id === productToAdd.id);

      if (existingProductIndex !== -1) {
        state.basket[existingProductIndex].quantity += 1;
      } else {
        state.basket.push({
          ...productToAdd,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += productToAdd.price;
    },

    clearCart: (state) => {
      state.basket = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addCart, clearCart } = basketSlice.actions;

export default basketSlice.reducer;
