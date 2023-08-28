const palavras = ["livro", "caneta", "sol", "carro", "orelha"]


const palavraInvalida = palavras.
    some((palavra) => {
        return palavra.length > 5;
    });

if (palavraInvalida) {
    console.log("existe palavra inválida");
}
else {
    console.log("array validado");
}