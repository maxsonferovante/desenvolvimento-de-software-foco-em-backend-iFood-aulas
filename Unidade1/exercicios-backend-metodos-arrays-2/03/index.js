const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const temBebida = palavras.some((palavra) => {
    return palavra === "cerveja" || palavra === "vodka";
});

if (temBebida) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
}
else {
    console.log("tudo certo, vamos as compras!");
}