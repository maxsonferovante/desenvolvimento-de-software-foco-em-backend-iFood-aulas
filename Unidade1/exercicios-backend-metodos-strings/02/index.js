const cpf = "02285418248";
const cnpj = "12345678000199";


function formatarCpf(cpf) {
    if (cpf.length == 11) {
        const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        return cpfFormatado;
    }
    else {
        return "CPF inválido!";
    }
}

function formatarCnpj(cnpj) {
    if (cnpj.length == 14) {
        const cnpjFormatado = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        return cnpjFormatado;
    }
    else {
        return "CNPJ inválido!";
    }
}

console.log(formatarCpf(cpf));
console.log(formatarCnpj(cnpj));

