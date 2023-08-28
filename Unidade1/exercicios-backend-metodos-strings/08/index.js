const cpf = "011.022.033-44";


function removeSymbols(cpf) {
    return cpf.replace(/\D/g, "");
}

console.log(removeSymbols(cpf));