import express from 'express';
import dotenv from "dotenv";
import { healthCheck } from './src/helpers/healthCheck.js';

// to load the .env file
dotenv.config();

// created the express app
const app = express();
app.use(express.json());
app.use('/api/healthCheck', healthCheck)

const port = process.env.PORT || 3000;

// listening on the port
app.listen(port, ()=>{
    console.log('Listening on port ' + port);
})