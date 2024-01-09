import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }

      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find((item) => item.id === action.payload);

      if (itemToRemove) {
        state.total -= itemToRemove.price * itemToRemove.amount;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    updateItemAmount: (state, action) => {
      const { id, amount } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
 
      if (itemToUpdate) {
        itemToUpdate.amount += amount;
        state.total += amount * itemToUpdate.price;

        // if (itemToUpdate.amount === 0) {
        //   state.items = state.items.filter((item) => item.id !== id);
        // }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, updateItemAmount, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
