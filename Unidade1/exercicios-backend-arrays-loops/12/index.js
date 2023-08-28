const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// seu codigo aqui
for (let i = filaDeDentro.length; i < 5; i++) {
    filaDeDentro.push(filaDeFora.shift());
    if (filaDeFora.length == 0) {
        break;
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);
