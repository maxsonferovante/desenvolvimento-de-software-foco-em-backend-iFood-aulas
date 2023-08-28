const idade = 64;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = true;

if ((idade <= 12) || (idade > 65) || possuiPatologia || (altura < 150)) {
    console.log("ACESSO NEGADO")
}
else if (idade < 18 || ehEstudante) {
    console.log("10 reais")
}
else {
    console.log("20 reais")

}