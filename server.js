import express from 'express';
import dotenv from "dotenv";

// to load the .env file
dotenv.config();

// created the express app
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// listening on the port
app.listen(port, ()=>{
    console.log('Listening on port ' + port);
})