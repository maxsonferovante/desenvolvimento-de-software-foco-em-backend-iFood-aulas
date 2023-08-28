const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];


const filtroPorLetra = (letra) => {
    const nomesFiltrados = nomes.filter((nome) => {
        return nome.toLowerCase().startsWith(letra.toLowerCase());
    });
    return nomesFiltrados;
};

console.log(filtroPorLetra("a"));
