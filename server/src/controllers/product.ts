import { Request, Response } from "express";
import { Product } from "../models/product";
import { handleUpload } from "../utils/cloudinary";
import fs from "fs";
import { Cafe } from "../models/cafe";
import { myCache } from "../app";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, category, cafeId } = req.body;

    const cafe = await Cafe.find({place_id:cafeId});
    if (!cafe) {
      return res.status(404).json({ error: "Cafe not found" });
    }

    if (!name || !price || !category || !cafeId) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }


    const uploadResult = await handleUpload(req.file.path);
    const image = uploadResult.secure_url;

    // Delete the local file after uploading to Cloudinary
    fs.unlinkSync(req.file.path);

    await Product.create({ name, price, category, image,cafeId:cafeId });

    myCache.del("products");
    res.status(200).json({ message: "Product created successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    let products;
    if (myCache.has("products")) {
      products = JSON.parse(myCache.get("products") as string);
    } else {
      products = await Product.find();
      myCache.set("products", JSON.stringify(products));
    }
    res.status(200).json({ products });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductsByCafeId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cafe = await Cafe.findOne({ place_id: id });
    const cafeImg = cafe.image;
    let products;
    if (myCache.has(`products-${id}`)) {
      products = JSON.parse(myCache.get(`products-${id}`) as string);
    }
    else {
     

      if (!cafe) {
        return res.status(404).json({ error: "Cafe not found" });
      }
      products = await Product.find({ cafeId: id });

      if (!products) {
        return res.status(404).json({ error: "Product not found" });
      }
      myCache.set(`products-${id}`, JSON.stringify(products));
    }
    res.status(200).json({ products,cafeImg,cafeName:cafe.name });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, category,cafeId } = req.body;
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if(req.file){
      const uploadResult = await handleUpload(req.file.path);
      product.image = uploadResult.secure_url;
      fs.unlinkSync(req.file.path);
    }
    if (name) product.name = name;
    if (price) product.price = price;
    if (category) product.category = category;
    if (cafeId) product.cafeId = cafeId;

    await product.save();


    myCache.del(`product-${id}`);
    myCache.del("products");

    res.status(200).json({ message: "Product updated successfully" });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    await product.deleteOne();
    myCache.del(`product-${id}`);
    myCache.del("products");
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
