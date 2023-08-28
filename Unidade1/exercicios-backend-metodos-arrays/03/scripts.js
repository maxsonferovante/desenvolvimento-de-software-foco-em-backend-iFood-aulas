/*
Crie uma função que receba dois parâmetros, o primeiro sendo um array de carros e o segundo um número inteiro. A função deverá encontrar o carro na posição informada no segundo parâmetro e capturar 3 carros subsequentes incluindo o que foi encontrado na posição informada. A função deve imprimir o resultado.

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
Para o exemplo acima deverá imprimir:

Corola - Fusca - Chevete
*/

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontrarCarros(nomes, posicao) {

    return nomes.slice(posicao, posicao + 3).join(' - ');

}

console.log(encontrarCarros(nomes, posicao));
