const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido && !sobrenome) {
    console.log(apelido);
}
else if (primeiroNome && sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`);
}
else if (primeiroNome) {
    console.log(primeiroNome);
}
else {
    console.log("Não possui nome");
}