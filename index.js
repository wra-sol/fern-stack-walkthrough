import express, {json} from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import {firebase} from './firebase.js';
import verifyToken from './middlewares/verifyToken.js';
import userRoutes from './userRoutes.js';
dotenv.config ();
const app = express ();
const port = process.env.PORT || 3000;

app.use (cors ());
app.use (json ());

app.use ('*', (req, res, next) => {
  console.log (req.baseUrl, req.method);
  next ();
});
app.use (verifyToken, userRoutes);

app.use ((error, req, res, next) => {
  res.status (500).json ({error: error.message});
});

app.listen (port, () => console.log (`Express app listening on ${port}`));
