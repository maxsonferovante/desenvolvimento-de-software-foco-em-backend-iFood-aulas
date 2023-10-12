const express = require('express');
const { cadastrarLivroController,
    atualizarLivroController,
    listarLivrosController,
    removerLivroController,
    listarLivrosComAutoresController } = require('../controllers/livroController');

const { validarCadastroLivro, validarBuscaLivroPorId, validarAtualizacaoLivro, validarRemovecaoLivro } = require('../middlewares/livroMiddleware');


const autorRoutes = express.Router();

autorRoutes.get('/', listarLivrosController);
autorRoutes.get('/livro', listarLivrosComAutoresController);
autorRoutes.post('/', validarCadastroLivro, cadastrarLivroController);
autorRoutes.get('/:id', validarBuscaLivroPorId, listarLivrosController);
autorRoutes.put('/:id', validarAtualizacaoLivro, atualizarLivroController);
autorRoutes.delete('/:id', validarRemovecaoLivro, removerLivroController);


module.exports = autorRoutes;