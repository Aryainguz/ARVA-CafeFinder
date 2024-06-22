import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface Admin {
  email: string;
  password: string;
}

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const Admin = mongoose.models.Admin || mongoose.model<Admin>("Admin", adminSchema);