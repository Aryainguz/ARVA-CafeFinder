import mongoose, { Document, Schema } from "mongoose";

interface Product extends Document {
  cafeId: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

const productSchema: Schema = new Schema({
  cafeId: {
    type: String,
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

export const Product = mongoose.models.Product || mongoose.model<Product>('Product', productSchema);
