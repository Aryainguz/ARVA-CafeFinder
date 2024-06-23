import mongoose, { Document, Schema } from 'mongoose';

interface CoffeeShop extends Document {
  name: string;
  location: string;
  rating: string;
  image: string; 
  totalRatings: number;
  openNow: boolean;
  minPriceRange: number;
  placeId: string;
}

const CoffeeShopSchema: Schema = new Schema({
  name: { type: String, required: true },
  formatted_address: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: String, required: true }, 
  price_level: { type: Number, required: true },
  user_ratings_total: { type: Number, required: true },
  open_now: { type: Boolean, required: true },
  place_id: { type: String, required: true },
});

export const Cafe =  mongoose.models.Cafe || mongoose.model<CoffeeShop>('CoffeeShop', CoffeeShopSchema);
