import express from "express";
import cors from "cors";
import NodeCache from "node-cache";
import { config } from "dotenv";
import { connectDB } from "./utils/db";

config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI || "";
connectDB(mongoURI);

export const myCache = new NodeCache();

const app = express();

app.get("/", (req, res) => {
  res.send("api v1 for ARVA.HEALTH is working!");
});

app.use(express.json());

// Specify allowed origins
const allowedOrigins = ["http://localhost:3000"];

// Use the CORS middleware with options
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is allowed
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
