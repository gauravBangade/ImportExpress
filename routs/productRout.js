import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createProductController, deleteProductController, getAllProducts, getSingleProduct, productPhotoController, updateProductController } from "../controler/productController.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );

router.get("/get-products", getAllProducts);

router.get("/get-singleproducts/:slug", getSingleProduct);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

export default router;

