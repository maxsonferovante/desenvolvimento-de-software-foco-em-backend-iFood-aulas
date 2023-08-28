const numeros = [54, 22, 14, 87, 10, 284];

let indiceDoNumeroEncontrado = -1
let indice = 0

while (indiceDoNumeroEncontrado === -1) {
    if (numeros[indice] === 10) {
        indiceDoNumeroEncontrado = indice
    }
    indice++
}

console.log(indiceDoNumeroEncontrado)

