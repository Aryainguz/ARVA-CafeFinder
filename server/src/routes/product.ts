import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product";


const app = express.Router();


app.post("/new",createProduct)

app.get("/all",getAllProducts)


app
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default app;
