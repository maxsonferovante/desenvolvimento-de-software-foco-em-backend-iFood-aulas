const express = require('express');
const { get, getPorld } = require('./controladores/imoveis');

const roteador = express();

roteador.get('/imoveis', get);
roteador.get('/imoveis/:id', getPorld);

module.exports = roteador;