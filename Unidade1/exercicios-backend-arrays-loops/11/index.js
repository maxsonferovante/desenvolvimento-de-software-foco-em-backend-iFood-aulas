const original = [5, 7, 13, 17, 26, 34, 118, 245];

// Filtrar os números entre 10 e 20 ou os maiores que 100
const numerosFiltrados = []

for (let i = 0; i < original.length; i++) {
    if ((original[i] >= 10 && original[i] <= 20) || original[i] > 100) {
        numerosFiltrados.push(original[i]);
    }
}
console.log(original);

console.log(numerosFiltrados);