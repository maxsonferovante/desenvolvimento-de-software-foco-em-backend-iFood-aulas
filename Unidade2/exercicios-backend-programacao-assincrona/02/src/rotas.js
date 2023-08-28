const rotas = require('express').Router();

const controladoresPokemon = require('./controladores/pokemon')

const { numeroDaPaginaEValido } = require('./intermediarios');

rotas.get('/pokemon', numeroDaPaginaEValido, controladoresPokemon.getAllPokemons);

rotas.get('/pokemon/:identificador', controladoresPokemon.getByidentifierPokemon);


module.exports = rotas;