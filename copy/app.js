import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json'


//Importando Router
// import usersRoutes from './routes/users.routes';
// import authRoutes from './routes/auth.routes'



const app = express();

app.set('pkg', pkg);

//middlewares
app.use(morgan('dev'));
app.use(express.json());


// app.use('/users',usersRoutes);
// app.use('/auth', authRoutes);


app.get('/users', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});



//routes


export default app;