const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

// se os arrays não tiverem o mesmo tamanho, não podemos comparar os elementos
if (arrayA.length != arrayB.length) {
    console.log("Os arrays não tem o mesmo tamanho");
}
else {
    // percorremos os arrays comparando os elementos
    let index = 0

    while (index < arrayA.length) {
        // se o elemento do array A for menor que o elemento do array B, imprimimos o elemento do array A
        if (arrayA[index] < arrayB[index]) {
            console.log(arrayA[index]);
        } else {
            console.log(arrayB[index]);
        }
        index++;
    }
}