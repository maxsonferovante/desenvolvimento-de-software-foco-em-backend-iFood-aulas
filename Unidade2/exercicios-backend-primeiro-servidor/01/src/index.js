
const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogador = 0;

app.get('/', (req, res) => {
    res.send("Bem vindo ao servidor Express!");
});

app.get('/jogada', (req, res) => {
    if (jogador >= jogadores.length) {
        jogador = 0;
    }
    res.send(`É a vez de ${jogadores[jogador]} jogar! Jogada ${jogador + 1} de ${jogadores.length}!`);
    jogador++;
});

app.listen(3000, () => {
    console.log("rodano no link: localhost:3000")
});