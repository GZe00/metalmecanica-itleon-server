const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'metamecanica',
    password: 'root',
    port: 5432,
});


const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = (request.params.id);
    // console.log(`Request de getUserByID:`);
    pool.query('SELECT * FROM users WHERE email = $1', [id], (error, results) => {
        if (error) {
            throw error
        }else if(!(JSON.stringify(results.rows) === JSON.stringify([]))){
            console.log(`Si existe el correo en la DB ${id}`);
            response.status(200).json(results.rows);
        }else{
            console.log(`NO existe el correo en la DB ${results.rows.id}`);
            response.status(200).json(results.rows);
        }


    })
}

const createUser = (request, response) => {
    console.log(request.body)
    const { names, lastnames, controlnumber, email, password, birthday, gender, student, teach } = request.body;
    // console.log(request);
    pool.query('INSERT INTO users (names, lastnames, controlnumber, email, password, birthday, gender, student, teach) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [names, lastnames, controlnumber, email, password, birthday, gender, student, teach], (error, results) => {
        if (error) {
            throw error
        }
        // console.log(results)
        response.status(201).send(`User added with ID:`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}