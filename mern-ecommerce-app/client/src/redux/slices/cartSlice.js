import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(i => i._id === action.payload._id);
      if (existing) { existing.qty += 1; }
      else { state.items.push({ ...action.payload, qty: 1 }); }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i._id !== action.payload);
    },
    updateQty: (state, action) => {
      const item = state.items.find(i => i._id === action.payload.id);
      if (item) item.qty = action.payload.qty;
    },
    clearCart: (state) => { state.items = []; }
  }
});

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
