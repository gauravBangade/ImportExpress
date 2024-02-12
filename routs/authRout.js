import express from "express";
import { registerController, loginController, testController } from '../controler/registerControler.js';
import  {  isAdmin, requireSignIn }  from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);

// test
router.get('/test',requireSignIn,isAdmin, testController)
export default router;
