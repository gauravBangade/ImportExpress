import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/authCryot.js";
import Jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    console.log("here");
    const { name, email, password, phone, address, answer } = req.body;
    //validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!answer) {
      return res.send({ message: "Address is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // valid
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email and password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    const match = await comparePassword(password, user.password);
    console.log("Password:", password);
    console.log("User Password:", user.password);

    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }

    //token
    //token
    const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: true,
      message: "login succfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro login failed",
      error,
    });
  }
};

export const forgotPasswordControler = async (req, res) => {
  try {
    const { email, answer, newpassword } = req.body;
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!newpassword) {
      return res.send({ message: "new Password is Required" });
    }
    if (!answer) {
      return res.send({ message: "questiom no is Required" });
    }
    // check
    const user = await userModel.findOne({ email, answer });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong email or answer",
      });
    }
    const hashed = await hashPassword(newpassword);
    await userModel.findByIdAndUpdate(user.id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "password reset succfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro password recovery failed",
      error,
    });
  }
};
// test controller

export const testController = (req, res) => {
  res.send("proctected rout");
};
