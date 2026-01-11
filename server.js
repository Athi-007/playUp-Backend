import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/database.js';
import cors from 'cors';

const app = express();
app.use(express.json())
dotenv.config();
app.use(cors())

import authRouter from './src/routes/authRoute.js';

app.use("/" , authRouter);




connectDB().then(()=> {
    app.listen(process.env.PORT , () => {   
    console.log ("server listen on the port" )
  });
});


