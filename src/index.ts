import express, { Express, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

const DB: string = 'mongodb://localhost:27017/chat_app';

mongoose
  .connect(DB, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express.js with MongoDB!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
