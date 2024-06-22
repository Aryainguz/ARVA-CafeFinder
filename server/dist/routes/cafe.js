"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cafe_1 = require("../controllers/cafe");
const multer_1 = __importDefault(require("../middlewares/multer"));
const isAdmin_1 = require("../middlewares/isAdmin");
const app = express_1.default.Router();
app.post("/new", isAdmin_1.isAdmin, multer_1.default, cafe_1.createCafe);
app.get("/all", cafe_1.getAllCafes);
app
    .route("/:id")
    .get(cafe_1.getCafeById)
    .put(isAdmin_1.isAdmin, multer_1.default, cafe_1.updateCafe)
    .delete(isAdmin_1.isAdmin, cafe_1.deleteCafe);
exports.default = app;
