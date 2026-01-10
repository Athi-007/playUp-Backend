import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/database.js';

const app = express();
app.use(express.json())
dotenv.config();


connectDB().then(()=> {
    app.listen(process.env.PORT , () => {   
    console.log ("server listen on the port" )
  });
});
