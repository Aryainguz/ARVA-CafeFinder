import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product";
import upload from "../middlewares/multer";
import { isAdmin } from "../middlewares/isAdmin";


const app = express.Router();


app.post("/new",isAdmin,upload,createProduct)

app.get("/all",getAllProducts)


app
  .route("/:id")
  .get(getProductById)
  .put(isAdmin,upload,updateProduct)
  .delete(isAdmin,deleteProduct);

export default app;
