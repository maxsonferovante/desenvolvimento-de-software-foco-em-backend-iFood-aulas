//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 3;

if (quantidadeDeAguaIngerida < 1.5) {
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!");
}
else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais água!");
}
else if (quantidadeDeAguaIngerida > 3) {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, continue assim!");
}
else {
    console.log("Risco Nulo - Você está ingerindo uma ótima quantidade de água, parabéns!");
}