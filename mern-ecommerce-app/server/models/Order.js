const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items:     [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, qty: Number, price: Number }],
  total:     { type: Number, required: true },
  isPaid:    { type: Boolean, default: false },
  isDelivered: { type: Boolean, default: false },
  address:   { street: String, city: String, pincode: String },
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);
