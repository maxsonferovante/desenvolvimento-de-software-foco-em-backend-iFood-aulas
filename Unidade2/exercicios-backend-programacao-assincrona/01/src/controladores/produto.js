const produtos = require('../bancodedados/produtos');

const listarProdutos = async (req, res) => {
    return await res.json(produtos);
};


const listarProdutoPorId = async (req, res) => {
    return await res.json(produtos.find(produto => produto.id === Number(req.params.id)));
};

const calcularFrete = (req, res) => {
    const produto = produtos.find(produto => produto.id === Number(req.params.id));
    const cep = req.params.cep;
    const estado = req.estado;
    let frete = 0;

    if (estado === "SP" || estado === "RJ") {
        frete = produto.valor * 0.15;
    }
    else if (estado === "BA" || estado === "SE" || estado === "PE" || estado === "AL" || estado === "PB") {
        frete = produto.valor * 0.10;
    }
    else {
        frete = produto.valor * 0.12;
    }

    const resposta = {
        produto: produto,
        estado: estado,
        frete: frete
    };

    return res.json(resposta);

};

module.exports = {
    listarProdutos,
    listarProdutoPorId,
    calcularFrete
};