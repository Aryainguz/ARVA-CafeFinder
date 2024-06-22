import mongoose from "mongoose";

const coffeeShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  minPriceRange: {
    type: String,
    required: true
  },
  images: {
    type: String
  }
});

export const CoffeeShop = mongoose.model("CoffeeShop", coffeeShopSchema);
