"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../controllers/product");
const multer_1 = __importDefault(require("../middlewares/multer"));
const app = express_1.default.Router();
app.post("/new", multer_1.default, product_1.createProduct);
app.get("/all", product_1.getAllProducts);
app
    .route("/:id")
    .get(product_1.getProductById)
    .put(multer_1.default, product_1.updateProduct)
    .delete(product_1.deleteProduct);
exports.default = app;
