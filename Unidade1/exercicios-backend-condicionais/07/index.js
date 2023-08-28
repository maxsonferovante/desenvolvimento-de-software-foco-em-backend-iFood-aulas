const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3_000_000; //emCentavos

//seu código aqui
if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
}
else if (totalDeRendimentos <= 28_559.70) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}
else {
    console.log("PEGA LEAO");
}