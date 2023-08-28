let alunos = require('../dados/alunos');
const cursos = require('../dados/cursos');

const listarAlunos = (req, res) => {
    res.status(200).json(alunos);
}
const obterAluno = (req, res) => {
    const { id } = req.params;
    if (Number.isNaN(Number(id))) {
        res.status(400).json({ erro: 'Id deve ser um número inválido.' });
    }
    else {
        const aluno = alunos.find(aluno => aluno.id === Number(id));
        if (aluno) {
            res.status(200).json(aluno);
        } else {
            res.status(404).json({ erro: 'Aluno não encontrado' });
        }
    }
}

const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    const erro = validadorDeAluno(nome, sobrenome, idade, curso);
    if (erro.erro) {
        res.status(400).json(erro);
    }
    else {
        const novoAluno = {
            id: alunos.length,
            nome,
            sobrenome,
            idade,
            curso
        }
        alunos.push(novoAluno);
        res.status(201).json(novoAluno);
    }
}
const deletarAluno = (req, res) => {
    const { id } = req.params;
    if (Number.isNaN(Number(id))) {
        res.status(400).json({ erro: 'Id deve ser um número inválido.' });
    }
    else {
        const aluno = alunos.find(aluno => aluno.id === Number(id));
        if (aluno) {
            // é criado um novo array com todos os alunos que não possuem o id passado como parâmetro  
            alunos = alunos.filter(aluno => aluno.id !== Number(id));
            res.status(200).json(aluno);
        } else {
            res.status(404).json({ erro: 'Aluno a ser excluído não foi encontrado.' });
        }
    }
}
const substituirAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;
    const erro = validadorDeAluno(nome, sobrenome, idade, curso);
    if (erro.erro) {
        res.status(400).json(erro);
    }
    else {
        if (Number.isNaN(Number(id))) {
            res.status(400).json({ erro: 'Id deve ser um número inválido.' });
        }
        else {
            const aluno = alunos.find(aluno => aluno.id === Number(id));
            if (aluno) {
                const alunoAtualizado = {
                    id: aluno.id,
                    nome,
                    sobrenome,
                    idade,
                    curso
                }

                alunos[alunos.indexOf(aluno)] = alunoAtualizado;
                res.status(200).json(alunoAtualizado);
            } else {
                res.status(404).json({ erro: 'Aluno a ser substituído não foi encontrado.' });
            }
        }
    }
}

const editarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;
    const erro = validadorDeAluno(nome, sobrenome, idade, curso);
    if (erro.erro) {
        res.status(400).json(erro);
    }
    else {
        if (Number.isNaN(Number(id))) {
            res.status(400).json({ erro: 'Id deve ser um número inválido.' });
        }
        else {
            const aluno = alunos.find(aluno => aluno.id === Number(id));
            if (aluno) {
                const alunoAtualizado = {
                    id: aluno.id,
                    nome: nome || aluno.nome,
                    sobrenome: sobrenome || aluno.sobrenome,
                    idade: idade || aluno.idade,
                    curso: curso || aluno.curso
                }
                alunos[alunos.indexOf(aluno)] = alunoAtualizado;
                res.status(200).json(alunoAtualizado);
            } else {
                res.status(404).json({ erro: 'Aluno a ser editado não foi encontrado.' });
            }
        }
    }
}

const validadorDeAluno = (nome, sobrenome, idade, curso) => {
    if (!nome || !sobrenome || !idade || !curso) {
        return { erro: 'Todos os campos são obrigatórios.' };
    }
    else if (typeof nome !== 'string' || typeof sobrenome !== 'string' || typeof curso !== 'string') {
        return { erro: 'Todos os campos devem ser strings.' };
    }
    else if (nome.trim().length === 0 || sobrenome.trim().length === 0 || curso.trim().length === 0) {
        return { erro: 'Todos os campos devem ser preenchidos.' };
    }
    else if (typeof idade !== 'number' || idade < 18) {
        return { erro: 'Idade deve ser um número maior ou igual a 18.' };
    }
    else if (cursos.indexOf(curso) === -1) {
        return { erro: 'Curso inválido.' };
    }
    else {
        return {};
    }
}

module.exports = {
    listarAlunos,
    obterAluno,
    adicionarAluno,
    deletarAluno,
    substituirAluno,
    editarAluno
}