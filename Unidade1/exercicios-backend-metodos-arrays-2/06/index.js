const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadesCom8Caracteres = cidades.filter((cidade) => {
    return cidade.length <= 8;
});

const cidadesFormatads = cidadesCom8Caracteres.join(", ");

console.log(cidadesFormatads);