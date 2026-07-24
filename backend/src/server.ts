import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router/router.js';

dotenv.config();

const app = express();
const PORT_NUMBER = process.env.PORT || 5001;

app.use(express.json());

app.use('/api', router);

app.listen(PORT_NUMBER, () => {
  console.log(`Listening port ${PORT_NUMBER}`);
});
