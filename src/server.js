import express, { urlencoded } from 'express';
import mongoose from 'mongoose';

import { MOONGO_URI, PORT } from './config.js';

import errorController from './controller/error.controller.js';
import authRouter from "./routes/auth.routes.js"

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(authRouter)
app.use(errorController.ERRORS);

mongoose
  .connect(MOONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => console.log(err));
