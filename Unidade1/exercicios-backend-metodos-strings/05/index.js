const numeroCartao = '1111222233334444';


function mascaraCartao(numeroCartao) {
    if (numeroCartao.length == 16) {
        const quatroPrimeirosDigitos = numeroCartao.slice(0, 4);
        const quatroUltimosDigitos = numeroCartao.slice(12);
        const digitosOcultos = '********';
        return quatroPrimeirosDigitos + digitosOcultos + quatroUltimosDigitos;
    } else {
        return 'Número de cartão inválido';
    }
}

console.log(mascaraCartao(numeroCartao));