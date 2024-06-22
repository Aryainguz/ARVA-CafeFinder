import mongoose, { Document, Schema } from "mongoose";

interface Product extends Document {
  coffeeShopId: mongoose.Schema.Types.ObjectId;
  name: string;
  price: number;
  category: string;
  image: string;
}

const productSchema: Schema = new Schema({
  coffeeShopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoffeeShop",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true, // e.g., Coffee, Drinks, Food
  },
  image: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model<Product>("CoffeeShop", productSchema);
