import express from 'express';
import { APP_PORT, DB_URL } from './config';
// import errorHandler from './middlewares/errorHandler';
const app = express();
import routes from './routes';
// import mongoose from 'mongoose';
// import path from 'path';
// import cors from 'cors';



app.use('/api', routes);





app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));