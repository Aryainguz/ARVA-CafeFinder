"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCafe = exports.updateCafe = exports.getCafeById = exports.getAllCafes = exports.createCafe = void 0;
const cloudinary_1 = require("../utils/cloudinary");
const cafe_1 = require("../models/cafe");
const fs_1 = __importDefault(require("fs"));
const createCafe = async (req, res) => {
    try {
        const { name, location, rating, minPriceRange } = req.body;
        console.log(req.body);
        if (!name || !location || !rating || !minPriceRange) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (!req.file) {
            return res.status(400).json({ error: "Image is required" });
        }
        console.log("file->", req.file);
        const uploadResult = await (0, cloudinary_1.handleUpload)(req.file.path);
        const image = uploadResult.secure_url;
        // Delete the local file after uploading to Cloudinary
        fs_1.default.unlinkSync(req.file.path);
        await cafe_1.Cafe.create({ name, location, rating, image, minPriceRange });
        res.status(201).json({ message: "Cafe created successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createCafe = createCafe;
const getAllCafes = async (req, res) => {
    try {
        res.status(200).json({ message: "All cafes fetched successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllCafes = getAllCafes;
const getCafeById = async (req, res) => {
    try {
        res.status(200).json({ message: "Cafe fetched successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getCafeById = getCafeById;
const updateCafe = async (req, res) => {
    try {
        res.status(200).json({ message: "Cafe updated successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateCafe = updateCafe;
const deleteCafe = async (req, res) => {
    try {
        res.status(200).json({ message: "Cafe deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteCafe = deleteCafe;
