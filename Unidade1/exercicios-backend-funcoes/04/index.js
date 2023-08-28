const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += (valor / 100);
        this.historicos.push({
            tipo: "Depósito",
            valor: valor / 100
        });
        console.log(`Depósito de R$ ${valor / 100} realizado para o cliente: ${this.nome}`);
    },
    sacar: function (valor) {
        if (valor / 100 <= this.saldo) {
            this.saldo -= (valor / 100);
            this.historicos.push({
                tipo: "Saque",
                valor: valor / 100
            });
            console.log(`Saque de R$ ${valor / 100} realizado para o cliente: ${this.nome}`);
        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo}`);
        for (let historico of this.historicos) {
            console.log(`${historico.tipo} de R$ ${historico.valor}`);
        }
    }

}

contaBancaria.depositar(10000);
contaBancaria.sacar(500000);
contaBancaria.sacar(5000);
contaBancaria.extrato();