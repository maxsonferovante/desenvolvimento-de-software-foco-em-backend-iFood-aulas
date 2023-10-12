CREATE DATABASE IF NOT EXISTS biblioteca;

CREATE TABLE IF NOT EXISTS autores (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        idade INT;
);
CREATE TABLE IF NOT EXISTS livros (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        genero VARCHAR(255) NOT NULL,
        editora VARCHAR(255) NOT NULL,
        data_publicacao DATE NOT NULL,           
        autor_id INT NOT NULL,
        FOREIGN KEY (autor_id) REFERENCES autores(id)
    );