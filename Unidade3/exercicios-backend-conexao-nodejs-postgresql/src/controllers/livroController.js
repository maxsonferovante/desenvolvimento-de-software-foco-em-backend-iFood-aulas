const {
    cadastrarLivro,
    buscarLivroPorId,
    listarLivros,
    atualizarLivro,
    removerLivro,
    listarLivrosDoAutor,
    listarLivrosComAutores
} = require('../db/dbUtils');



const cadastrarLivroController = async (req, res) => {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;

    try {
        const livroCadastrado = await cadastrarLivro(
            nome,
            genero,
            editora,
            data_publicacao,
            id
        );
        res.status(201).json(livroCadastrado);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const buscarLivroPorIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const livro = await buscarLivroPorId(id);
        if (!livro) {
            return res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
        res.status(200).json(livro);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const listarLivrosController = async (req, res) => {
    try {
        const livros = await listarLivros();
        res.status(200).json(livros);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const atualizarLivroController = async (req, res) => {
    const { id } = req.params;
    const { titulo, autorId } = req.body;
    try {
        const livroAtualizado = await atualizarLivro(id, titulo, autorId);
        if (!livroAtualizado) {
            return res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
        res.status(200).json(livroAtualizado);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const removerLivroController = async (req, res) => {
    const { id } = req.params;
    try {
        const livroRemovido = await removerLivro(id);
        if (!livroRemovido) {
            return res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
        res.status(204).end();
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

const listarLivrosDoAutorController = async (req, res) => {
    const { id } = req.params;
    try {
        const livrosDoAutor = await listarLivrosDoAutor(id);
        if (!livrosDoAutor) {
            return res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
        res.status(200).json(livrosDoAutor);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }

};

const listarLivrosComAutoresController = async (req, res) => {
    try {
        const livrosComAutores = await listarLivrosComAutores();
        if (!livrosComAutores) {
            return res.status(404).json({ mensagem: '[] - Sem livros cadastrados' });
        }
        res.status(200).json(livrosComAutores);
    }
    catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
};

module.exports = {
    cadastrarLivroController,
    buscarLivroPorIdController,
    listarLivrosController,
    atualizarLivroController,
    removerLivroController,
    listarLivrosDoAutorController,
    listarLivrosComAutoresController
};

