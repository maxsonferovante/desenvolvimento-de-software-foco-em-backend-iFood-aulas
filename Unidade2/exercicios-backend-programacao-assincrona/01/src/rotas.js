const rotas = require('express').Router();
const controladoresProduto = require('./controladores/produto');
const { idProdutoValido, produtoExistente, cepValidado } = require('./intermediarios');


rotas.get('/produtos', controladoresProduto.listarProdutos);

rotas.get('/produtos/:id', idProdutoValido, produtoExistente, controladoresProduto.listarProdutoPorId);

rotas.get('/produtos/:id/frete/:cep', idProdutoValido, produtoExistente, cepValidado, controladoresProduto.calcularFrete);


module.exports = rotas;