// server.js
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routs/authRout.js';
import categoryRout from './routs/categoryRout.js';
import productRout from './routs/productRout.js';
import multer from 'multer';
import cors from 'cors';

//env config
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Multer configuration for parsing form data
const upload = multer({ dest: 'uploads/' });

// Use multer for parsing form data in the '/api/v1/auth/knowledge' route
app.post('/api/v1/auth/knowledge', upload.none(), (req, res) => {
  const { name, description } = req.body;
  // Your logic here
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRout);
app.use('/api/v1/products', productRout);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Import Express</h1>');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
