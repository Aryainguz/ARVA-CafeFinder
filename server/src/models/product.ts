import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  coffeeShopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CoffeeShop',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true  // e.g., Coffee, Drinks, Food
  }
});

export const Product = mongoose.model("Product", productSchema);
