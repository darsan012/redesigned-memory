import express from 'express';
import 'dotenv/config'

import { healthCheck } from './src/helpers/healthCheck.js';
import quizRouter from './src/routes/quizRoutes.js'

// created the express app
const app = express();
app.use(express.json());
app.use('/api/healthCheck', healthCheck)
app.use('/api/quiz', quizRouter);


const port = process.env.PORT || 3000;

// listening on the port
app.listen(port, ()=>{
    console.log('Listening on port ' + port);
})