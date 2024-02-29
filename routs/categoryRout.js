import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  categoryController,
  createCategoryControler,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "../controler/categoryController.js";

const router = express.Router();

// Create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryControler
);

// Update Category

router.put(
  "/Update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get all category
router.get("/get-category", categoryController);

//get one category

router.get("/single-category/:slug", singleCategoryController);

// delete Category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
