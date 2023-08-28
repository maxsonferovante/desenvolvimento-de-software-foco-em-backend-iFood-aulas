const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasNumeradas = frutas.map((fruta) => {
    return `${frutas.indexOf(fruta)} - ${fruta.toLowerCase()[0].toUpperCase()}${fruta.toLowerCase().slice(1)}`; // 0 - Manga
});

console.log(frutasNumeradas);





