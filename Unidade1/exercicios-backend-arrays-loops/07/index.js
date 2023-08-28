const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComAa = []

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].toLowerCase().startsWith("a")) {
        nomesComAa.push(nomes[i]);
    }
}
console.log(nomesComAa); // [ 'Ana', 'amanda' ]