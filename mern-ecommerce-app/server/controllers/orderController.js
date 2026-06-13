const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { items, total, address } = req.body;
  try {
    const order = await Order.create({ user: req.user._id, items, total, address });
    res.status(201).json(order);
  } catch (e) { res.status(500).json({ message: e.message }); }
};

exports.getMyOrders = async (req, res) =>
  res.json(await Order.find({ user: req.user._id }).populate('items.product', 'name price'));

exports.getAllOrders = async (req, res) =>
  res.json(await Order.find().populate('user', 'name email'));
