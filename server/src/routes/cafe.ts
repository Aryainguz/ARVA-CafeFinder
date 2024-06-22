import express from "express";
import { createCafe, deleteCafe, getAllCafes, getCafeById, updateCafe } from "../controllers/cafe";
import upload from "../middlewares/multer";


const app = express.Router();


app.post("/new",upload,createCafe)

app.get("/all",getAllCafes)


app
  .route("/:id")
  .get(getCafeById)
  .put(upload,updateCafe)
  .delete(deleteCafe);

export default app;
