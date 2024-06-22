import mongoose, { Document, Schema } from 'mongoose';

interface CoffeeShop extends Document {
  name: string;
  location: string;
  rating: string;
  image: string; 
  minPriceRange: number;
}

const CoffeeShopSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: String, required: true }, 
  minPriceRange: { type: Number, required: true },
});

export const Cafe =  mongoose.model<CoffeeShop>('CoffeeShop', CoffeeShopSchema);
