"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controllers/admin");
const app = express_1.default.Router();
app.post("/new", admin_1.createAdmin);
app.get("/all", admin_1.getAllAdmins);
app.post("/login", admin_1.loginAdmin);
exports.default = app;
