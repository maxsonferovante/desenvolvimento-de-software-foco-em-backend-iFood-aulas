let montante = 0
let capital = 1000
let taxaFixaDeJuros = 0.125
let periodoDeTempo = 5

// para calcular os juros compostos, usa-se:

montante = capital * ((1+taxaFixaDeJuros)**periodoDeTempo)

console.log(`No final do periodo de ${periodoDeTempo} meses, com uma taxa de juros de ${taxaFixaDeJuros}, o valor será de ${montante}`)