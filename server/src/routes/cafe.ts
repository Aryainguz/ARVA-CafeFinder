import express from "express";
import { createCafe, deleteCafe, getAllCafes, getCafeById, updateCafe } from "../controllers/cafe";
import upload from "../middlewares/multer";
import { isAdmin } from "../middlewares/isAdmin";


const app = express.Router();


app.post("/new",isAdmin,upload,createCafe)

app.get("/all",getAllCafes)


app
  .route("/:id")
  .get(getCafeById)
  .put(isAdmin,upload,updateCafe)
  .delete(isAdmin,deleteCafe);

export default app;
