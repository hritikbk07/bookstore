import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
const app = express();
app.use(cors());//midleware to avoid cors error
app.use(express.json());//middleware to parse json data

dotenv.config();

const PORT=process.env.PORT || 4000
const URI = process.env.MongoDBURI;

//connect to mongodb 
mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.error("Error connecting to mongodb:", error);
  });
//define routes

app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
