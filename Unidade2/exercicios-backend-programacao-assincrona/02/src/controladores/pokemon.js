const { listarPokemons, detalharPokemon } = require("utils-playground")


const getAllPokemons = async (req, res) => {
    const { pag } = req.query;
    try {
        if (pag) {
            const pokemons = await listarPokemons(pag);
            res.json(pokemons);
        }
        else {
            const pokemons = await listarPokemons();
            res.json(pokemons);
        }

    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const getByidentifierPokemon = async (req, res) => {
    const { identificador } = req.params;
    try {
        const pokemon = await detalharPokemon(identificador);
        res.json({
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            base_experience: pokemon.base_experience,
            forms: pokemon.forms,
            abilities: pokemon.abilities,
            species: pokemon.species,
        });
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};


module.exports = {
    getAllPokemons,
    getByidentifierPokemon
}