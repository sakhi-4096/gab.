const { Schema, model } = require('mongoose');

// Define schema for products
const productSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  unitName: {
    type: String,
    required: true,
  },
  priceSol: {
    type: Number,
    required: true,
  },
  priceUsd: {
    type: Number,
    required: true,
  },
});

// Create model from schema
const Product = model('Product', productSchema);

export default Product;
