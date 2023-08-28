const express = require('express');
const rotas = require('./roteador');
const intermediarios = require('./intermediarios');

const app = express();

app.use(express.json());
app.use(intermediarios.autenticar);
app.use(rotas);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});