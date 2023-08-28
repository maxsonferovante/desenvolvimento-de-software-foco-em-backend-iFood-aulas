//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 10000;


if (valorDoProduto === valorPago) {
    console.log("Produto quitado. Não há parcelas restantes.");
}
else {
    valorDaParcela = valorDoProduto / quantidadeDoParcelamento;

    //valor da diferença
    const valorDaDiferenca = valorDoProduto - valorPago;

    // quantidade de parcelas restantes
    const quantidadeDeParcelasRestantes = valorDaDiferenca / valorDaParcela;


    console.log(`Restam ${quantidadeDeParcelasRestantes} parcelas de R$${valorDaParcela.toFixed(2)}`)
}  