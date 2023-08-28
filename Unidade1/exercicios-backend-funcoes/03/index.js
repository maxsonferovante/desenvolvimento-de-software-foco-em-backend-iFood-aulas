const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumoDoCarrinho: function () {

        totalDeItens = this.calcularTotalDeItens();

        mensagemItem = totalDeItens > 1 ? "itens" : "item";

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${totalDeItens}` + ` ${mensagemItem}`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`);

    },
    calcularTotalDeItens: function () {
        // calcular e retornar o total de itens
        let total = 0;
        for (let produto of this.produtos) {
            total += produto.qtd;
        }
        return total;
    },
    calcularTotalAPagar: function () {
        // calcular o total a pagar e retorna em reais, com duas casas decimas
        let total = 0;
        for (produto of this.produtos) {
            total += (produto.precoUnit / 100) * produto.qtd;
        }
        return total.toFixed(2);
    }
}


carrinho.imprimirResumoDoCarrinho();