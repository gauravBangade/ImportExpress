import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordControler,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controler/registerControler.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { deleteTopicController, getTopicController, knowledgeController } from "../controler/chatController.js";

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
//forgot password
router.post("/forgot-password", forgotPasswordControler);
// test
router.get("/test", requireSignIn, isAdmin, testController);

//protected rout
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//Admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//Update user
router.put("/profile", requireSignIn, updateProfileController);

router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

router.post("/knowledge", requireSignIn, isAdmin, knowledgeController);

router.get('/get-topic', requireSignIn, isAdmin, getTopicController);

router.delete(
  "/delete-topic/:id",
  requireSignIn,
  isAdmin,
  deleteTopicController
);

export default router;
