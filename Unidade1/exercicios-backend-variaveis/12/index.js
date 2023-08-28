let montante = 90_000
let capitalInicial = 60_000

let numeroDeMeses = 24

let taxaDeJuros = 0

taxaDeJuros =  (((montante/capitalInicial)**(1/numeroDeMeses)) - 1)*100

console.log(
    `"O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros} %, pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais."`
)

// "O seu financiamento de 60000 reais teve uma taxa de juros de 1.703 %, pois após 24 meses você teve que pagar 90000 reais."