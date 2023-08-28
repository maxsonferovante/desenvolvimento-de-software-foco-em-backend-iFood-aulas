const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let i = 0; i < original.length; i++) {
    // se o número atual for par, adicionamos ele ao array de pares
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    } else {
        // se o número atual for ímpar, adicionamos ele ao array de ímpares
        impares.push(original[i]);
    }
}
console.log(original);
console.log(pares);
console.log(impares);