import express from "express";
import { registerController, loginController, testController, forgotPasswordControler } from '../controler/registerControler.js';
import  {  isAdmin, requireSignIn }  from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);
//forgot password
router.post('/forgot-password', forgotPasswordControler)
// test
router.get('/test',requireSignIn,isAdmin, testController)

//protected rout
router.get('/user-auth', requireSignIn, (req, res)=> {
  res.status(200).send({ok: true});
})
//Admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ok: true});
})

export default router;