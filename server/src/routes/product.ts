import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product";
import upload from "../middlewares/multer";


const app = express.Router();


app.post("/new",upload,createProduct)

app.get("/all",getAllProducts)


app
  .route("/:id")
  .get(getProductById)
  .put(upload,updateProduct)
  .delete(deleteProduct);

export default app;
