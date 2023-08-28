let populacaoInicial = 1000
let taxaTramissao = 4
let tempoPercorrido = 7

let totalDePessoasPossivelmenteInfectadas = 0

totalDePessoasPossivelmenteInfectadas = populacaoInicial * ((taxaTramissao)**(tempoPercorrido/7))

console.log(`O total de pessoas infectadas será de ${totalDePessoasPossivelmenteInfectadas}`)

