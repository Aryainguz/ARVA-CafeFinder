"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const createProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Product created successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createProduct = createProduct;
const getAllProducts = async (req, res) => {
    try {
        res.status(200).json({ message: "All products fetched successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    try {
        res.status(200).json({ message: "Product fetched successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getProductById = getProductById;
const updateProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Product updated successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteProduct = deleteProduct;
