import express from 'express';
import dotenv from 'dotenv';
import router from './router/router.js';
import dataBaseConnection from './config/db.js';

dotenv.config();
dataBaseConnection();
const app = express();
const PORT_NUMBER = process.env.PORT || 5001;

app.use(express.json());

app.use('/api', router);

app.listen(PORT_NUMBER, () => {
  console.log(`Listening port ${PORT_NUMBER}`);
});
