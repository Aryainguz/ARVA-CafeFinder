import express from "express";
import { createCafe, deleteCafe, getAllCafes, getCafeById, updateCafe } from "../controllers/cafe";


const app = express.Router();


app.post("/new",createCafe)

app.get("/all",getAllCafes)


app
  .route("/:id")
  .get(getCafeById)
  .put(updateCafe)
  .delete(deleteCafe);

export default app;
