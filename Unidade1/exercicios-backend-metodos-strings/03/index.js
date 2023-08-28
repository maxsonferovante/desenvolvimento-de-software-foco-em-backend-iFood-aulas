const texto = "Aprenda programar do zero na Cubos Academy";

function urlAmigavel(texto) {
    return texto.toLowerCase().replace(/ /g, "-");
}

console.log(urlAmigavel(texto));