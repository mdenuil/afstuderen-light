const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required.'],
    },
    description: {
      type: String,
      required: [true, 'description is required.'],
    },
    price: {
      type: Number,
      required: [true, 'price is required.'],
    },
  },
  {
    timestamps: true,
  }
);

let Product = mongoose.model('product', ProductSchema);

module.exports = Product;
