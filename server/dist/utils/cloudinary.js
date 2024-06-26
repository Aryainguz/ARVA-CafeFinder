"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpload = void 0;
const cloudinary_1 = require("cloudinary");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: "./.env",
});
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
const handleUpload = async (filePath) => {
    const res = await cloudinary_1.v2.uploader.upload(filePath, {
        resource_type: 'auto',
    });
    return res;
};
exports.handleUpload = handleUpload;
exports.default = cloudinary_1.v2;
