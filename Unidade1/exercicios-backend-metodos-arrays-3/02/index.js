/*Utilizando reduce() faça um programa que determina a maior string (em comprimento) dentre os elementos de um array de strings e imprime essa string.*/
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maiorString = cidades.reduce((acc, cidade) => {
    if (acc.length > cidade.length) return acc
    return cidade
})

console.log(maiorString)