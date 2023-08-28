const numeros = [300, 24, 1, 8, 11, 35, 15, 25];

let maiorNumero = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        console.log(numeros[i], maiorNumero);
        maiorNumero = numeros[i];
        console.log(numeros[i], maiorNumero);
    }
}
console.log(maiorNumero); // 24