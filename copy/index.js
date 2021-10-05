// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const port = 3001;
// const db = require('../db.config');
// const cors = require('cors');

// app.use(cors());
// app.use(express.json());

// app.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
// });

// app.get('/users', db.getUsers);
// app.get('/users/:id', db.getUserById);
// app.post('/users', db.createUser);
// app.put('/users/:id', db.updateUser);
// app.delete('/users/:id', db.deleteUser);

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
// });

import app from './app';


const PORT = 4000;


const main = async() => {
    await app.listen(PORT);
    console.log(`Server corriendo en puerto ${PORT}`);
};

main();

