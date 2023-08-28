const { livros } = require('../dados/livros')

const consultarLivros = async (req, res) => {
    return res.status(200).json(livros)
}

const consultarLivroPorId = async (req, res) => {
    const { id } = req.params
    if (id) {
        if (Number.isNaN(Number(id))) {
            return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
        }
        const livro = livros.find(livro => livro.id === Number(id))
        if (livro) {
            return res.status(200).json(livro)
        } else {
            return res.status(404).json({ mensagem: "Não existe livro para o ID informado." })
        }
    } else {
        res.status(400).json({ mensagem: 'É necessário informar um id' })
    }
}

const adicionarLivro = async (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body
    const resposta = validarLivro({ titulo, autor, ano, numPaginas })
    if (resposta.mensagem) {
        return res.status(400).json(resposta)
    }
    const livro = {
        id: livros.length + 1,
        titulo,
        autor,
        ano,
        numPaginas
    }
    livros.push(livro)
    return res.status(201).json(livro)
}

const substituirLivro = async (req, res) => {
    const { id } = req.params
    if (Number.isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }
    if (!livros.find(livro => livro.id === Number(id))) {
        return res.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado." })
    }

    const { titulo, autor, ano, numPaginas } = req.body
    const resposta = validarLivro({ titulo, autor, ano, numPaginas })

    if (resposta.mensagem) {
        return res.status(400).json(resposta)
    }

    const livro = {
        id: Number(id),
        titulo,
        autor,
        ano,
        numPaginas
    }
    livros.splice(livros.findIndex(livro => livro.id === Number(id)), 1, livro)
    return res.status(200).json({ mensagem: 'Livro substituído.' })
}

const atualizarLivro = async (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    if (Number.isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }
    if (!livros.find(livro => livro.id === Number(id))) {
        return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." })
    }

    if (!titulo && !autor && !ano && !numPaginas) {
        return res.status(400).json({ mensagem: "É necessário informar ao menos um campo para alteração." })
    }
    else {
        if (typeof titulo !== 'string' || !titulo) {
            return res.status(400).json({ mensagem: 'O campo titulo deve ser uma string.' })
        }
        else {
            const index = livros.findIndex(livro => {
                if (livro.id === Number(id)) {
                    livro.titulo = titulo
                }
            });
        }
        if (typeof autor !== 'string' || !autor) {
            return res.status(400).json({ mensagem: 'O campo autor deve ser uma string.' })
        }
        else {
            const index = livros.findIndex(livro => {
                if (livro.id === Number(id)) {
                    livro.autor = autor
                }
            });
        }
        if (typeof ano !== 'string' || !ano || Number(ano) < 0) {
            return res.status(400).json({ mensagem: 'O campo ano deve ser uma string.' })
        }
        else {
            const index = livros.findIndex(livro => {
                if (livro.id === Number(id)) {
                    livro.ano = ano
                }
            });
        }
        if (typeof numPaginas !== 'number' || !numPaginas || numPaginas < 0) {
            return res.status(400).json({ mensagem: 'O campo numPaginas deve ser um número.' })
        }
        else {
            const index = livros.findIndex(livro => {
                if (livro.id === Number(id)) {
                    livro.numPaginas = numPaginas
                }
            });
        }
        return res.status(200).json({ mensagem: 'Livro alterado.' })
    }

}
const removerLivro = async (req, res) => {
    const { id } = req.params
    if (Number.isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }
    if (!livros.find(livro => livro.id === Number(id))) {
        return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." })
    }
    livros.splice(livros.findIndex(livro => livro.id === Number(id)), 1)
    return res.status(200).json({ mensagem: 'Livro removido.' })
}

const validarLivro = (livro) => {
    if (!livro) {
        return { mensagem: 'O corpo da requisição não pode ser vazio.' }
    }
    if (!livro.titulo || typeof livro.titulo !== 'string') {
        return { mensagem: 'O campo titulo é obrigatório e deve ser uma string.' }
    }
    if (!livro.autor || typeof livro.autor !== 'string') {
        return { mensagem: 'O campo autor é obrigatório e deve ser uma string.' }
    }
    if (!livro.ano || typeof livro.ano !== 'string' || Number(livro.ano) < 0) {
        return { mensagem: 'O campo ano é obrigatório e deve ser um número inteiro positivo.' }
    }
    if (!livro.paginas || typeof livro.paginas !== 'number' || livro.paginas < 0) {
        return { mensagem: 'O campo paginas é obrigatório e deve ser um número inteiro positivo.' }
    }
    return {}
}
module.exports = {
    consultarLivros,
    consultarLivroPorId,
    adicionarLivro,
    substituirLivro,
    atualizarLivro,
    removerLivro
}