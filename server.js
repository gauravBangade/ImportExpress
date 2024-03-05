import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routs/authRout.js";
import categoryRout from "./routs/categoryRout.js";
import productRout from "./routs/productRout.js"

import cors from "cors";
//env config
dotenv.config();

//database config
connectDB();

//rest boject
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRout);
app.use("/api/v1/products", productRout);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Import Express</h1>");
});

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
