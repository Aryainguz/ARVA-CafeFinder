import express from "express";
import { createAdmin, getAllAdmins, loginAdmin } from "../controllers/admin";

const app = express.Router();

app.post("/new", createAdmin);

app.get("/all", getAllAdmins);

app.post("/login", loginAdmin);

export default app;
