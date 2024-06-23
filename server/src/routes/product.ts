import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductsByCafeId, updateProduct } from "../controllers/product";
import upload from "../middlewares/multer";
// import { isAdmin } from "../middlewares/isAdmin";


const app = express.Router();


// app.post("/new",isAdmin,upload,createProduct) isAdmin to be used for admin only access
app.post("/new",upload,createProduct)

app.get("/all",getAllProducts)


// app
//   .route("/:id")
//   .get(getProductById)
//   .put(isAdmin,upload,updateProduct)
//   .delete(isAdmin,deleteProduct);  // is Admin to be used for admin only access


app
  .route("/:id")
  .get(getProductsByCafeId)
  .put(upload,updateProduct)
  .delete(deleteProduct);

export default app;
