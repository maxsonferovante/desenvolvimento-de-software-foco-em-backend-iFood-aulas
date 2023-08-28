const carro = {
    ligado: false,
    velocidade: 0,

    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado");
        } else {
            this.ligado = true;
            this.statusAtual();
        }
    },

    desligar: function () {
        if (this.ligado && this.velocidade === 0) {
            this.ligado = false;
            this.statusAtual();
        } else if (this.velocidade > 0) {
            console.log("Não é possível desligar um carro em movimento");
        }
        else {
            console.log("Este carro já está desligado");
        }
    },
    acelerar: function () {
        if (this.ligado) {
            this.velocidade += 10;
            this.statusAtual();
        } else {
            console.log("Não é possível acelerar um carro desligado");
        }
    },
    desacelerar: function () {
        if (this.ligado) {
            if (this.velocidade > 0) {
                this.velocidade -= 10;
                this.statusAtual();
                this.stop();
            } else {
                console.log("O carro já está parado");
            }
        } else {
            console.log("Não é possível desacelerar um carro desligado");
        }
    },
    statusAtual: function () {
        console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${this.velocidade}.`);
    },
    start: function () {
        if (!this.ligado) {
            this.ligar();
        }
        this.acelerar();
    },
    stop: function () {
        if (this.velocidade === 0) {
            this.desligar();
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
carro.desacelerar();
carro.desligar();


carro.start();
carro.desacelerar();
carro.stop();