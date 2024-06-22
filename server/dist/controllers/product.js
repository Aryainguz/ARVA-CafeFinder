"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
const cloudinary_1 = require("../utils/cloudinary");
const fs_1 = __importDefault(require("fs"));
const cafe_1 = require("../models/cafe");
const app_1 = require("../app");
const createProduct = async (req, res) => {
    try {
        const { name, price, category, cafeId } = req.body;
        const cafe = await cafe_1.Cafe.findById(cafeId);
        if (!cafe) {
            return res.status(404).json({ error: "Cafe not found" });
        }
        if (!name || !price || !category || !cafeId) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (!req.file) {
            return res.status(400).json({ error: "Image is required" });
        }
        const uploadResult = await (0, cloudinary_1.handleUpload)(req.file.path);
        const image = uploadResult.secure_url;
        // Delete the local file after uploading to Cloudinary
        fs_1.default.unlinkSync(req.file.path);
        await product_1.Product.create({ name, price, category, image, cafeId: cafe._id });
        app_1.myCache.del("products");
        res.status(200).json({ message: "Product created successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createProduct = createProduct;
const getAllProducts = async (req, res) => {
    try {
        let products;
        if (app_1.myCache.has("products")) {
            products = JSON.parse(app_1.myCache.get("products"));
        }
        else {
            products = await product_1.Product.find();
            app_1.myCache.set("products", JSON.stringify(products));
        }
        res.status(200).json({ products });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        let product;
        if (app_1.myCache.has(`product-${id}`)) {
            product = JSON.parse(app_1.myCache.get(`product-${id}`));
        }
        else {
            product = await product_1.Product.findById(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            app_1.myCache.set(`product-${id}`, JSON.stringify(product));
        }
        res.status(200).json({ product });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getProductById = getProductById;
const updateProduct = async (req, res) => {
    try {
        const { name, price, category, cafeId } = req.body;
        const { id } = req.params;
        const product = await product_1.Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        if (req.file) {
            const uploadResult = await (0, cloudinary_1.handleUpload)(req.file.path);
            product.image = uploadResult.secure_url;
            fs_1.default.unlinkSync(req.file.path);
        }
        if (name)
            product.name = name;
        if (price)
            product.price = price;
        if (category)
            product.category = category;
        if (cafeId)
            product.cafeId = cafeId;
        await product.save();
        app_1.myCache.del(`product-${id}`);
        app_1.myCache.del("products");
        res.status(200).json({ message: "Product updated successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await product_1.Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        await product.deleteOne();
        app_1.myCache.del(`product-${id}`);
        app_1.myCache.del("products");
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteProduct = deleteProduct;
