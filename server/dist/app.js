"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("api v1 for ARVA.HEALTH is working!");
});
app.use(express_1.default.json());
// Specify allowed origins
const allowedOrigins = ["http://localhost:3000"];
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
const port = 5000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Express is working on http://localhost:${port}`);
});
