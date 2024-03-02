import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express.js with MongoDB!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
