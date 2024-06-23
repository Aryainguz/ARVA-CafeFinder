import { Request, Response } from "express";
import { handleUpload } from "../utils/cloudinary";
import { Cafe } from "../models/cafe";
import fs from "fs";
import { myCache } from "../app";

export const createCafe = async (req: Request, res: Response) => {
  try {
    const { name, formatted_address, rating, price_level,user_ratings_total,open_now,place_id } = req.body;

    if (!name || !formatted_address || !rating || !price_level || !user_ratings_total || !open_now || !place_id) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const uploadResult = await handleUpload(req.file.path);
    const image = uploadResult.secure_url;

    // Delete the local file after uploading to Cloudinary
    fs.unlinkSync(req.file.path);

    await Cafe.create({ name, formatted_address, rating, image, price_level,user_ratings_total,open_now,place_id });

    myCache.del("cafes");

    res.status(201).json({ message: "Cafe created successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCafes = async (req: Request, res: Response) => {
  try {
    let cafes;
    if (myCache.has("cafes")) {
      cafes = JSON.parse(myCache.get("cafes") as string);
    } else {
      cafes = await Cafe.find();
      myCache.set("cafes", JSON.stringify(cafes));
    }
    res.status(200).json({ cafes });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCafeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let cafe;
    if (myCache.has(`cafe-${id}`)) {
      cafe = JSON.parse(myCache.get(`cafe-${id}`) as string);
    } else {
      cafe = await Cafe.findById(id);
      if (!cafe) {
        return res.status(404).json({ error: "Cafe not found" });
      }
      myCache.set(`cafe-${id}`, JSON.stringify(cafe));
    }
    res.status(200).json({ cafe });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCafe = async (req: Request, res: Response) => {
  try {
    const { name, formatted_address, rating, price_level,user_ratings_total,open_now } = req.body;
    const { id } = req.params;

    const cafe = await Cafe.findById(id);
    if (!cafe) {
      return res.status(404).json({ error: "Cafe not found" });
    }

    if (req.file) {
      const uploadResult = await handleUpload(req.file.path);
      cafe.image = uploadResult.secure_url;
      fs.unlinkSync(req.file.path);
    }
    if (name) cafe.name = name;
    if (formatted_address) cafe.formatted_address = formatted_address;
    if (rating) cafe.rating = rating;
    if (price_level) cafe.price_level = price_level;
    if (user_ratings_total) cafe.user_ratings_total = user_ratings_total;
    if (open_now) cafe.open_now = open_now;

    await cafe.save();

    // Clear the cache for the updated cafe
    myCache.del(`cafe-${id}`);
    myCache.del("cafes");

    res.status(200).json({ message: "Cafe updated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCafe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cafe = await Cafe.findById(id);
    if (!cafe) {
      return res.status(404).json({ error: "Cafe not found" });
    }

    myCache.del(`cafe-${id}`);
    myCache.del("cafes");

    await cafe.deleteOne();
    res.status(200).json({ message: "Cafe deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
