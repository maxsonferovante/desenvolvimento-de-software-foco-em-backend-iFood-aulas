const { getStateFromZipcode } = require('utils-playground')
const produtos = require("./bancodedados/produtos");



const idProdutoValido = (req, res, next) => {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
        res.status(400).json({ mensagem: "O ID deve ser um número inteiro positivo." });
    } else {
        next();
    }
};

const produtoExistente = (req, res, next) => {
    const produto = produtos.find(produto => produto.id === Number(req.params.id));
    if (!produto) {
        res.status(404).json({ mensagem: "Produto não encontrado." });
    } else {
        next();
    }
};

const cepValidado = async (req, res, next) => {
    const cep = req.params.cep;
    try {
        const estado = await getStateFromZipcode(cep);
        req.estado = estado;
        next();

    } catch (error) {
        res.status(400).json({ mensagem: "CEP inválido." });
    }
};

module.exports = {
    idProdutoValido,
    produtoExistente,
    cepValidado
};