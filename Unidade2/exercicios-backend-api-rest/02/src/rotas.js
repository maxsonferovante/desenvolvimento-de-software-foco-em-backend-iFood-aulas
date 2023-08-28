const express = require('express')
const controladoresConvidados = require('./controladores/convidados')

const rotas = express()

rotas.get('/convidados', controladoresConvidados.listaConvidados);
rotas.post('/convidados', controladoresConvidados.adicionarConvidado);
rotas.delete('/convidados/:nome', controladoresConvidados.removerConvidado);

module.exports = rotas