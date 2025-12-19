const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true
  },

  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'transfer'],
    required: true
  },

  status: {
    type: Boolean,
    default: true
  },

  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    required: true
  },

  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = mongoose.model('Sale', saleSchema, 'sale'); 
