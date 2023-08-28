const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorNumero = numeros.reduce((acc, curr) => {
    if (acc > curr) return acc
    return curr
})

console.log(maiorNumero)