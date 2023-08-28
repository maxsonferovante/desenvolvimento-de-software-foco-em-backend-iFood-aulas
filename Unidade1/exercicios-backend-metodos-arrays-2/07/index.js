const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const buscarEndereço = (cep) => {
    const endereço = endereços.find((endereço) => {
        return endereço.cep === cep;
    });
    if (endereço === undefined) {
        return undefined;
    }
    return endereço.rua;
};

console.log(buscarEndereço(00111222)); // Rua dos Artistas
console.log(buscarEndereço(00111333)); // Rua Augusta
console.log(buscarEndereço(00222444));  // Avenida Paralela
console.log(buscarEndereço(11222333));  // Rua Carlos Gomes

console.log(buscarEndereço(00000000));  // undefined
