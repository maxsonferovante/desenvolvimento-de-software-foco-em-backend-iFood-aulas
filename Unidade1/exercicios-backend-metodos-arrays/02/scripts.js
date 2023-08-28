/*
Divisão de grupos
Crie uma função que receba dois parâmetros, o primeiro sendo um array de nomes e o segundo um número inteiro. A função deverá dividir o array em grupos com a quantidade de nomes de acordo com o numero passado no segundo parâmetro. Caso não seja possível separar em grupos iguais, o último grupo será o restante dos nomes. A função deve imprimir o resultado da divisão dos grupos.

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
Para o exemplo acima deverá imprimir:

Grupo 1: Juninho, Vidal, Guido, Dani.
Grupo 2: Ruli, Diego.
*/

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupos(nomes, tamanhoDoGrupo) {
    let grupos = [];
    let grupo = [];
    for (let i = 0; i < nomes.length; i++) {
        grupo.push(nomes[i]);
        if (grupo.length == tamanhoDoGrupo) {
            grupos.push(grupo);
            grupo = [];
        }
    }
    if (grupo.length > 0) {
        grupos.push(grupo);
    }
    return grupos;
}

console.log(dividirGrupos(nomes, tamanhoDoGrupo));
