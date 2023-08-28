let identificador = "123";
let nome = "JoMASDAS silva costa";
let email = "      jose@email.com  ";


const cadastro = {
    identificador,
    nome,
    email,
    formatarDados: function () {
        this.identificador = this.identificador.padStart(6, "0");

        this.nome = this.nome.split(" ").map((nome) => {
            return nome[0].toUpperCase() + nome.slice(1).toLowerCase();
        }).join(" ");

        this.email = this.email.trim();
    },
    visualizar: function () {
        console.log(`Identificador: ${this.identificador}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`E-mail: ${this.email}`);
    }
}


cadastro.visualizar()
cadastro.formatarDados();
cadastro.visualizar()

