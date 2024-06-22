"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const admin_1 = require("../models/admin");
const isAdmin = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const admin = await admin_1.Admin.findById(token);
    if (!admin) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};
exports.isAdmin = isAdmin;
