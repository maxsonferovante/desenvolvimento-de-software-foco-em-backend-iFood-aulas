const { cadastrarAutor,
    buscarAutorPorId,
    listarAutores,
    atualizarAutor,
    removerAutor,
} = require('../db/dbUtils');

const cadastrarAutorController = async (req, res) => {
    const { nome, idade } = req.body;
    try {
        const autorCadastrado = await cadastrarAutor(nome, idade);
        res.status(201).json(autorCadastrado);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const buscarAutorPorIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const autor = await buscarAutorPorId(id);
        if (!autor) {
            return res.status(404).json({ mensagem: 'Autor não encontrado' });
        }
        res.status(200).json(autor);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const listarAutoresController = async (req, res) => {
    try {
        const autores = await listarAutores();
        res.status(200).json(autores);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const atualizarAutorController = async (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;
    try {
        const autorAtualizado = await atualizarAutor(id, nome, idade);
        if (!autorAtualizado) {
            return res.status(404).json({ mensagem: 'Autor não encontrado' });
        }
        res.status(200).json(autorAtualizado);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const removerAutorController = async (req, res) => {
    const { id } = req.params;
    try {
        const autorRemovido = await removerAutor(id);
        if (!autorRemovido) {
            return res.status(404).json({ mensagem: 'Autor não encontrado' });
        }
        res.status(204).end();
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

module.exports = {
    cadastrarAutorController,
    buscarAutorPorIdController,
    listarAutoresController,
    atualizarAutorController,
    removerAutorController,

};