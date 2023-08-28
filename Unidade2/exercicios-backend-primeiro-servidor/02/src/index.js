const express = require('express');

const app = express();

let segundos = 0;
let minutos = 0;
let pausado = false;


let cronometro = () => {
    setInterval(function () {

        if (!pausado) {
            segundos++;
        }
        if (segundos == 60) {
            minutos++;
            segundos = 0;
        }
    }, 1000);
}

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, '0')} minutos e ${segundos.toString().padStart(2, '0')} segundos`);
});

app.get('/iniciar', (req, res) => {
    res.send(`Cronômetro iniciado!`);
    cronometro();
});

app.get('/pausar', (req, res) => {
    res.send(`Cronômetro pausado`)
    pausado = true;
});

app.get('/continuar', (req, res) => {
    res.send(`Cronômetro continuando!`);
    pausado = false;
});

app.get('/zerar', (req, res) => {
    res.send(`Cronômetro zerado!`);
    segundos = 0;
    minutos = 0;

});


app.listen(8000, () => {
    console.log("rodano no link: localhost:8000")
});