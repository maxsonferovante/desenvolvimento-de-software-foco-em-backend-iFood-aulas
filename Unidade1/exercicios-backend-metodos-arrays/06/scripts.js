const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontrarDonoDoPet(nomeDoPet) {
    for (let i = 0; i < usuarios.length; i++) {
        const pets = usuarios[i].pets;
        for (let j = 0; j < pets.length; j++) {
            if (pets[j] === nomeDoPet) {
                console.log(`O dono(a) do(a) ${nomeDoPet} é o(a) ${usuarios[i].nome}`)
                return;
            }
        }
    }
    console.log(` Que pena ${nomeDoPet}, não encontramos seu dono(a)`)
}

encontrarDonoDoPet("Naninha");
encontrarDonoDoPet("Batata");
encontrarDonoDoPet("Pingo");
encontrarDonoDoPet("REX");