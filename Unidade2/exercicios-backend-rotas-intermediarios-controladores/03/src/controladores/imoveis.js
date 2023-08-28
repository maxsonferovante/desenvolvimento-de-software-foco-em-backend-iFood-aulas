const { imoveis } = require('../dados/imoveis');


const get = (req, res) => {
    res.send(imoveis);
};

const getPorld = (req, res) => {
    const id = req.params.id;
    const imovel = imoveis.find(imovel => imovel.id === Number(id));
    if (imovel) {
        res.send(imovel);
    } else {
        res.status(404).send(`Não existe imóvel com o id ${id}.`);
    }
};

module.exports = {
    get,
    getPorld
};