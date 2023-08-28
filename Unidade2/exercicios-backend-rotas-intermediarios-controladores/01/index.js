const express = require('express')

const app = express()

app.get('/somar', (req, res) => {
    const { a, b } = req.query

    const resultado = Number(a) + Number(b)

    res.send(resultado.toString())
});

app.get('/subtrair', (req, res) => {
    const { a, b } = req.query
    const resultado = Number(a) - Number(b)
    res.send(resultado.toString())
});

app.get('/multiplicar', (req, res) => {
    const { a, b } = req.query
    const resultado = Number(a) * Number(b)
    res.send(resultado.toString())
});

app.get('/dividir', (req, res) => {
    const { a, b } = req.query
    const resultado = Number(a) / Number(b)
    res.send(resultado.toString())
});


app.listen(3000, () => {
    console.log('Server is running in port 3000')
});