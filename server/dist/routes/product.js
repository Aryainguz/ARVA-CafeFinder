"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../controllers/product");
const multer_1 = __importDefault(require("../middlewares/multer"));
// import { isAdmin } from "../middlewares/isAdmin";
const app = express_1.default.Router();
// app.post("/new",isAdmin,upload,createProduct) isAdmin to be used for admin only access
app.post("/new", multer_1.default, product_1.createProduct);
app.get("/all", product_1.getAllProducts);
// app
//   .route("/:id")
//   .get(getProductById)
//   .put(isAdmin,upload,updateProduct)
//   .delete(isAdmin,deleteProduct);  // is Admin to be used for admin only access
app
    .route("/:id")
    .get(product_1.getProductsByCafeId)
    .put(multer_1.default, product_1.updateProduct)
    .delete(product_1.deleteProduct);
exports.default = app;
