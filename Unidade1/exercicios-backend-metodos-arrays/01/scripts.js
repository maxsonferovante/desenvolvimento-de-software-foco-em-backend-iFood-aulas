const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function inverterArrayDeFrutas(frutas) {
    return frutas.reverse().join(', ');
}

// solução do item A - inverterArrayDeFrutas
let frutasInvertidas = inverterArrayDeFrutas(frutas);
console.log(frutas);
console.log(frutasInvertidas);


// solução do item B - remover o último elemento e primeiro elemento
frutas.pop();
console.log(frutas);

frutas.shift();
console.log(frutas);

// solução do item C - adicionar um elemento no final 
frutas.reverse();
frutas.push('Melão');
console.log(frutas);


