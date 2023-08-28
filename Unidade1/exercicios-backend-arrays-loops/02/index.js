const letras = ["A", "a", "B", "C"];

let quantidadeEncontrada = 0
const letraPesquisada = ["E", "e"]

for (let i = 0; i < letras.length; i++) {
    if (letras[i] === letraPesquisada[0] || letras[i] === letraPesquisada[1]) {
        quantidadeEncontrada++
    }
}

if (quantidadeEncontrada == 0) {
    console.log(`Nehuma letra '${letraPesquisada[0]}' ou '${letraPesquisada[1]}'  encontrada`)
}
else {
    const cabeçalhoDaMensagem = quantidadeEncontrada == 1 ? "Foi encontrada" : "Foram encontradas"
    console.log(` ${cabeçalhoDaMensagem} ${quantidadeEncontrada} '${letraPesquisada[0]}' ou '${letraPesquisada[1]}'`)
}

