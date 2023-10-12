const express = require('express');
const { cadastrarAutorController, atualizarAutorController, listarAutoresController, removerAutorController } = require('../controllers/autorController');
const { listarLivrosDoAutorController } = require('../controllers/livroController');
const { validarCadastroAutor, validarBuscaAutorPorId, validarAtualizacaoAutor, validarRemocaoAutor } = require('../middlewares/autorMiddleware');

const { cadastrarLivroController } = require('../controllers/livroController');
const { validarCadastroLivro } = require('../middlewares/livroMiddleware');
const autorRoutes = express.Router();

autorRoutes.get('/', listarAutoresController);
autorRoutes.post('/', validarCadastroAutor, cadastrarAutorController);
autorRoutes.get('/:id', validarBuscaAutorPorId, listarAutoresController);
autorRoutes.put('/:id', validarAtualizacaoAutor, atualizarAutorController);
autorRoutes.delete('/:id', validarRemocaoAutor, removerAutorController);

autorRoutes.post('/autor/:id/livro', validarCadastroLivro, cadastrarLivroController);
autorRoutes.get('/autor/:id/livros', validarBuscaAutorPorId, listarLivrosDoAutorController);

module.exports = autorRoutes;