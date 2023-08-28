const numeros = [3, 24, 1, 8, 11, 35, 15, 25];

// a maior diferença entre dois números será a diferença entre o maior e o menor número do array

let maiorNumero = numeros[0];
let menorNumero = numeros[0];

// primeiro encontramos o maior e o menor número do array
for (let i = 0; i < numeros.length; i++) {
    // se o número atual for maior que o maior número, ele passa a ser o maior número
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
    // se o número atual for menor que o menor número, ele passa a ser o menor número
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

// depois calculamos a diferença entre eles
const maiorDiferenca = maiorNumero - menorNumero;

console.log(maiorDiferenca);