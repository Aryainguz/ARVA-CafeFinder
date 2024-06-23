"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myCache = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_cache_1 = __importDefault(require("node-cache"));
const dotenv_1 = require("dotenv");
const db_1 = require("./utils/db");
// Importing Routes
const cafe_1 = __importDefault(require("./routes/cafe"));
const product_1 = __importDefault(require("./routes/product"));
const admin_1 = __importDefault(require("./routes/admin"));
(0, dotenv_1.config)({
    path: "./.env",
});
const mongoURI = process.env.MONGO_URI || "";
(0, db_1.connectDB)(mongoURI);
exports.myCache = new node_cache_1.default();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("api v1 for ARVA.HEALTH is working!");
});
app.use(express_1.default.json());
// Specify allowed origins
const allowedOrigins = ["http://localhost:3000", "https://arva-cafe-finder.vercel.app"];
// Use the CORS middleware with options
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        // Check if the origin is allowed
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
// Using Routes
app.use("/api/v1/cafe", cafe_1.default);
app.use("/api/v1/product", product_1.default);
app.use("/api/v1/amin", admin_1.default);
const port = 5000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Express is working on http://localhost:${port}`);
});
