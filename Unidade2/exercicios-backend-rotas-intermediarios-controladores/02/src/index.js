const express = require('express');
const { jogadorDaVez, removerJogador, adicionarJogador } = require('./controladores/jogadores');

const app = express();

app.get('/', jogadorDaVez);
app.get('/remover', removerJogador);
app.get('/adicionar', adicionarJogador);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});