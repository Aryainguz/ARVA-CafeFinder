"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cafe_1 = require("../controllers/cafe");
const multer_1 = __importDefault(require("../middlewares/multer"));
const app = express_1.default.Router();
app.post("/new", multer_1.default, cafe_1.createCafe);
app.get("/all", cafe_1.getAllCafes);
app
    .route("/:id")
    .get(cafe_1.getCafeById)
    .put(multer_1.default, cafe_1.updateCafe)
    .delete(cafe_1.deleteCafe);
exports.default = app;
