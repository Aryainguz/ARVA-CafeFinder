import express from "express";
import { createCafe, deleteCafe, getAllCafes, getCafeById, updateCafe } from "../controllers/cafe";
import upload from "../middlewares/multer";
import { isAdmin } from "../middlewares/isAdmin";


const app = express.Router();


// app.post("/new",isAdmin,upload,createCafe)  isAdmin to be used for admin only access
app.post("/new",upload,createCafe)

app.get("/all",getAllCafes)


// app
//   .route("/:id")
//   .get(getCafeById)
//   .put(isAdmin,upload,updateCafe)
//   .delete(isAdmin,deleteCafe);  // isAdmin to be used for admin only access



app
  .route("/:id")
  .get(getCafeById)
  .put(upload,updateCafe)
  .delete(deleteCafe);  

export default app;
