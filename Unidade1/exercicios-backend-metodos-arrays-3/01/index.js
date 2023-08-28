
// a) Ordenar o array abaixo em ordem crescente.
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const crescente = numeros.sort()
console.log(crescente)

// b) Ordenar o array abaixo em ordem decrescente.
const decrescente = numeros.sort()
console.log(decrescente)

// c) Ordenar o array abaixo em ordem crescente. (Utilizar arrow function)
const crescenteArrow = numeros.sort((a, b) => a - b)

console.log(crescenteArrow)

// d) Ordenar o array abaixo em ordem decrescente. (Utilizar arrow function)
const decrescenteArrow = numeros.sort((a, b) => b - a)
console.log(decrescenteArrow)

// e) Ordenar o array abaixo em ordem crescente por nome de frutas.
const crescenteFrutas = frutas.sort((a, b) => a.localeCompare(b))
console.log(crescenteFrutas)

// f) Ordenar o array abaixo em ordem decrescente por nome de frutas.

const decrescenteFrutas = frutas.sort((a, b) => b.localeCompare(a)) // b - a
console.log(decrescenteFrutas)

// g) Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais)

const crescenteCaracteres = frutas.sort((a, b) => a.length - b.length)

console.log(crescenteCaracteres)