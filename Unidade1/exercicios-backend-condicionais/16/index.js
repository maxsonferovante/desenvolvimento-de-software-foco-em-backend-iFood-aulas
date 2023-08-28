//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 18;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if (possuiResponsavel || idadeDoAluno >= 18) {
    console.log("Rematrícula realizada com sucesso");
}
else {
    console.log("Não é possível fazer a rematrícula");
}

// usando ternário
let mensagem = (possuiResponsavel || idadeDoAluno >= 18) ? "Rematrícula realizada com sucesso" : "Não é possível fazer a rematrícula";

console.log(mensagem);