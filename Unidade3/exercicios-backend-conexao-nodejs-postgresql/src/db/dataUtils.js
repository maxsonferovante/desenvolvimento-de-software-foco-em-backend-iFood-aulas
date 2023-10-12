const { pool } = require('./pool');

const cadastrarAutor = async (nome, idade) => {
    const query = 'INSERT INTO autores (nome, idade) VALUES ($1, $2) RETURNING *';
    const values = [nome, idade];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    }
    catch (error) {
        console.log('Erro ao cadastrar autor:', error);
        throw error;
    }
};

const buscarAutorPorId = async (id) => {
    const query = 'SELECT * FROM autores WHERE id = $1';
    const values = [id];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    }
    catch (error) {
        console.log('Erro ao buscar autor por id:', error);
        throw error;
    }
};

const listarAutores = async () => {
    const query = 'SELECT * FROM autores';
    try {
        const result = await pool.query(query);
        return result.rows;
    }
    catch (error) {
        console.log('Erro ao listar autores:', error);
        throw error;
    }
};

const atualizarAutor = async (id, nome, idade) => {
    const query = 'UPDATE autores SET nome = $1, idade = $2 WHERE id = $3 RETURNING *';
    const values = [nome, idade, id];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    }
    catch (error) {
        console.log('Erro ao atualizar autor:', error);
        throw error;
    }
};

const removerAutor = async (id) => {
    const query = 'DELETE FROM autores WHERE id = $1';
    const values = [id];

    try {
        await pool.query(query, values);
    }
    catch (error) {
        console.log('Erro ao remover autor:', error);
        throw error;
    }
};

const cadastrarLivro = async (nome, genero, editora, data_publicacao, autor_id) => {
    const query = 'INSERT INTO livros (nome, genero, editora, data_publicacao, autor_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [nome, genero, editora, data_publicacao, autor_id];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    }
    catch (error) {
        console.log('Erro ao cadastrar livro:', error);
        throw error;
    }
};

const buscarLivroPorId = async (id) => {
    const query = 'SELECT * FROM livros WHERE id = $1';
    const values = [id];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    }
    catch (error) {
        console.log('Erro ao buscar livro por id:', error);
        throw error;
    }
};

const listarLivros = async () => {
    const query = 'SELECT * FROM livros';

    try {
        const result = await pool.query(query);
        return result.rows;
    }
    catch (error) {
        console.log('Erro ao listar livros:', error);
        throw error;
    }
};


const atualizarLivro = async (id, nome, genero, editora, data_publicacao, autor_id) => {
    const query = 'UPDATE livros SET nome = $1, genero = $2, editora = $3, data_publicacao = $4, autor_id = $5 WHERE id = $6 RETURNING *';
    const values = [nome, genero, editora, data_publicacao, autor_id, id];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    }
    catch (error) {
        console.log('Erro ao atualizar livro:', error);
        throw error;
    }
};

const removerLivro = async (id) => {
    const query = 'DELETE FROM livros WHERE id = $1';
    const values = [id];

    try {
        await pool.query(query, values);
    }
    catch (error) {
        console.log('Erro ao remover livro:', error);
        throw error;
    }
};
const buscarLivrosPorAutor = async (autorId) => {
    // Nesta consulta, usamos a função JSON_AGG para agregar os detalhes dos livros em um array JSON 
    // e JSON_BUILD_OBJECT para construir objetos JSON com os detalhes de cada livro. 
    // Isso permite que tenhamos uma única entrada para o autor com a lista de seus livros associados.

    const query = `
        SELECT
            autores.id AS id_autor,
            autores.nome AS nome_autor,
            autores.idade AS idade_autor,
            JSON_AGG(
                JSON_BUILD_OBJECT(
                    'id_livro', livros.id,
                    'nome_livro', livros.nome,
                    'genero_livro', livros.genero,
                    'editora_livro', livros.editora,
                    'data_publicacao_livro', livros.data_publicacao
                )
            ) AS livros
        FROM
            autores
        LEFT JOIN
            livros ON autores.id = livros.id_autor
        WHERE
            autores.id = $1
        GROUP BY
            autores.id;
    `;

    const values = [autorId];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];  // Retorna apenas a primeira linha, que contém os detalhes do autor e seus livros
    } catch (error) {
        console.log('Erro ao buscar livros por autor:', error);
        throw error;
    }
};

const listarLivrosComAutores = async () => {
    const query = `
        SELECT
            livros.id AS id_livro,
            livros.nome AS nome_livro,
            livros.genero AS genero_livro,
            livros.editora AS editora_livro,
            livros.data_publicacao AS data_publicacao_livro,
            autores.id AS id_autor,
            autores.nome AS nome_autor,
            autores.idade AS idade_autor
        FROM
            livros
        LEFT JOIN
            autores ON livros.autor_id = autores.id;
    `;

    try {
        const result = await pool.query(query);
        const livrosComAutores = result.rows.map(row => ({
            id: row.id_livro,
            nome: row.nome_livro,
            genero: row.genero_livro,
            editora: row.editora_livro,
            data_publicacao: row.data_publicacao_livro,
            autor: {
                id: row.id_autor,
                nome: row.nome_autor,
                idade: row.idade_autor
            }
        }));

        return livrosComAutores;
    } catch (error) {
        console.log('Erro ao listar os livros com autores:', error);
        throw error;
    }
};


module.exports = {
    cadastrarAutor,
    buscarAutorPorId,
    listarAutores,
    atualizarAutor,
    removerAutor,
    cadastrarLivro,
    buscarLivroPorId,
    listarLivros,
    atualizarLivro,
    removerLivro,
    buscarLivrosPorAutor,
    listarLivrosComAutores
};