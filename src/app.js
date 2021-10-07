import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes';
import rolRoutes from './routes/rol.routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));


app.use("/", userRoutes);
app.use("/", rolRoutes);

module.exports = app;