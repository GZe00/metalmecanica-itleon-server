import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));


app.use("/", userRoutes);

module.exports = app;