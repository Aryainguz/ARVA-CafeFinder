"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../controllers/product");
const multer_1 = __importDefault(require("../middlewares/multer"));
const isAdmin_1 = require("../middlewares/isAdmin");
const app = express_1.default.Router();
app.post("/new", isAdmin_1.isAdmin, multer_1.default, product_1.createProduct);
app.get("/all", product_1.getAllProducts);
app
    .route("/:id")
    .get(product_1.getProductById)
    .put(isAdmin_1.isAdmin, multer_1.default, product_1.updateProduct)
    .delete(isAdmin_1.isAdmin, product_1.deleteProduct);
exports.default = app;
