let pontoX1 = 1
let pontoY1 = 1

let pontoX2 = 1
let pontoY2 = 4

let distanciaEntrePontos = 0

// a distância é dada pela formula d = \sqrt{(x2 - x1)^2 + (y2 - y1)^2}
distanciaEntrePontos = Math.sqrt(((pontoX2 - pontoX1)**2) + ((pontoY2 - pontoY1)**2))


console.log(`A distância entre esses 2 pontos dados é de ${distanciaEntrePontos}`)