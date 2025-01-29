require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require("cookie-parser");
const session = require("express-session");

const { dbConncetion } = require('./db/db');
// User Router part
const router = require("./routes/UserRoutes");


const port =process.env.PORT || 3000;

app.use(
    cors({
      origin: 'http://localhost:5173', // Adjust the origin to your frontend's URL
      credentials: true, // Allow credentials (cookies) to be sent
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  
  app.options('*', cors());

  

app.use("/api",router)




app.listen(port,()=>{
    const database= dbConncetion();
    if(!database) process.exit(1);
    console.log(`Server is running  ${port}`);
})