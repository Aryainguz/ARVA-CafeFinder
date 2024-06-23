"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = exports.getAllAdmins = exports.createAdmin = void 0;
const admin_1 = require("../models/admin");
const createAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await admin_1.Admin.create({ email, password });
        res.status(201).json(admin);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createAdmin = createAdmin;
const getAllAdmins = async (req, res) => {
    try {
        const admins = await admin_1.Admin.find();
        res.status(200).json(admins);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllAdmins = getAllAdmins;
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await admin_1.Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }
        if (admin.password !== password) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        res.status(200).json(admin);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.loginAdmin = loginAdmin;
