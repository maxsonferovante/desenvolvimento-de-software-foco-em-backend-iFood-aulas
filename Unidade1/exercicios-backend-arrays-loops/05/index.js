const original = [1, 4, 12, 21, 53, 88, 112];

// Filtrar os números pares usando o metodo filter
const numerosPares = original.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // [ 4, 12, 88, 112 ]

// Filtrar os números pares usando for  
const numerosPares2 = [];
for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        numerosPares2.push(original[i]);
    }
}
console.log(numerosPares2); // [ 4, 12, 88, 112 ]