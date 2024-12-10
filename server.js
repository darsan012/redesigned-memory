import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { healthCheck } from './src/helpers/healthCheck.js';
import quizRouter from './src/routes/quizRoutes.js'


const corsOptions = {
    origin: [process.env.CLIENT_URL],
    optionsSuccessStatus: 200,
    credentials: true,
  };

// created the express app
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/healthCheck', healthCheck)
app.use('/api/quiz', quizRouter);


const port = process.env.PORT || 3000;

// listening on the port
app.listen(port, ()=>{
    console.log('Listening on port ' + port);
})