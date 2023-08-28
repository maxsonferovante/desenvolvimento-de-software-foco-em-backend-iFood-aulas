const express = require('express');
const alunos = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', alunos.obterAluno);
rotas.post('/alunos', alunos.adicionarAluno);
rotas.delete('/alunos/:id', alunos.deletarAluno);
rotas.put('/alunos/:id', alunos.substituirAluno);
rotas.patch('/alunos/:id', alunos.editarAluno);

module.exports = rotas;