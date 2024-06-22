"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCafe = exports.updateCafe = exports.getCafeById = exports.getAllCafes = exports.createCafe = void 0;
const cloudinary_1 = require("../utils/cloudinary");
const cafe_1 = require("../models/cafe");
const fs_1 = __importDefault(require("fs"));
const app_1 = require("../app");
const createCafe = async (req, res) => {
    try {
        const { name, location, rating, minPriceRange } = req.body;
        if (!name || !location || !rating || !minPriceRange) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (!req.file) {
            return res.status(400).json({ error: "Image is required" });
        }
        const uploadResult = await (0, cloudinary_1.handleUpload)(req.file.path);
        const image = uploadResult.secure_url;
        // Delete the local file after uploading to Cloudinary
        fs_1.default.unlinkSync(req.file.path);
        await cafe_1.Cafe.create({ name, location, rating, image, minPriceRange });
        app_1.myCache.del("cafes");
        res.status(201).json({ message: "Cafe created successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createCafe = createCafe;
const getAllCafes = async (req, res) => {
    try {
        let cafes;
        if (app_1.myCache.has("cafes")) {
            cafes = JSON.parse(app_1.myCache.get("cafes"));
        }
        else {
            cafes = await cafe_1.Cafe.find();
            app_1.myCache.set("cafes", JSON.stringify(cafes));
        }
        res.status(200).json({ cafes });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllCafes = getAllCafes;
const getCafeById = async (req, res) => {
    try {
        const { id } = req.params;
        let cafe;
        if (app_1.myCache.has(`cafe-${id}`)) {
            cafe = JSON.parse(app_1.myCache.get(`cafe-${id}`));
        }
        else {
            cafe = await cafe_1.Cafe.findById(id);
            if (!cafe) {
                return res.status(404).json({ error: "Cafe not found" });
            }
            app_1.myCache.set(`cafe-${id}`, JSON.stringify(cafe));
        }
        res.status(200).json({ cafe });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getCafeById = getCafeById;
const updateCafe = async (req, res) => {
    try {
        const { name, location, rating, minPriceRange } = req.body;
        const { id } = req.params;
        const cafe = await cafe_1.Cafe.findById(id);
        if (!cafe) {
            return res.status(404).json({ error: "Cafe not found" });
        }
        if (req.file) {
            const uploadResult = await (0, cloudinary_1.handleUpload)(req.file.path);
            cafe.image = uploadResult.secure_url;
            fs_1.default.unlinkSync(req.file.path);
        }
        if (name)
            cafe.name = name;
        if (location)
            cafe.location = location;
        if (rating)
            cafe.rating = rating;
        if (minPriceRange)
            cafe.minPriceRange = minPriceRange;
        await cafe.save();
        // Clear the cache for the updated cafe
        app_1.myCache.del(`cafe-${id}`);
        app_1.myCache.del("cafes");
        res.status(200).json({ message: "Cafe updated successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateCafe = updateCafe;
const deleteCafe = async (req, res) => {
    try {
        const { id } = req.params;
        const cafe = await cafe_1.Cafe.findById(id);
        if (!cafe) {
            return res.status(404).json({ error: "Cafe not found" });
        }
        app_1.myCache.del(`cafe-${id}`);
        app_1.myCache.del("cafes");
        await cafe.deleteOne();
        res.status(200).json({ message: "Cafe deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteCafe = deleteCafe;
