const express = require('express');
const controladores = require('./controladores/livros');

const rotas = express();

rotas.get('/livros', controladores.consultarLivros);
rotas.get('/livros/:id', controladores.consultarLivroPorId);
rotas.post('/livros', controladores.adicionarLivro);
rotas.put('/livros/:id', controladores.substituirLivro);
rotas.path('/livros/:id', controladores.atualizarLivro);
rotas.delete('/livros/:id', controladores.removerLivro);

module.exports = rotas;
