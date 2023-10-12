const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT
});


const createTablesIfNotExists = async () => {
    const createAutorTable = `CREATE TABLE IF NOT EXISTS autores (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        idade INT,
    )`;
    const createLivroTable = `CREATE TABLE IF NOT EXISTS livros (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        genero VARCHAR(255) NOT NULL,
        editora VARCHAR(255) NOT NULL,
        data_publicacao DATE NOT NULL,           
        autor_id INT NOT NULL,
        FOREIGN KEY (autor_id) REFERENCES autores(id)
    )`;

    try {
        await pool.query(createAutorTable);
        await pool.query(createLivroTable);
        console.log('Tables created successfully (if not existed)');
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = {
    pool,
    createTablesIfNotExists
};