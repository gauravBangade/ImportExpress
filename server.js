import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from './routs/authRout.js'

//env config
dotenv.config();

//database config
connectDB();

//rest boject
const app = express();

//middleware 
app.use(express.json());
app.use(morgan('dev'));


app.use("/api/v1/auth", authRoutes);

app.get('/', (req, res) => {
    res.send( "<h1>Welcome to Import Express</h1>",
    );
});

const port = process.env.port || 8080;

app.listen(port, () =>{
    console.log(`server running on ${port}`)
});