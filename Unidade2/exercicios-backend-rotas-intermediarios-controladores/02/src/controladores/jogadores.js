const { jogadores } = require('../bancodedados');
let jogada = 0;

//a) Crie um recurso na home (http://localhost:8000) do servidor para que seja retornada uma mensagem informando de quem é a vez de jogar
const jogadorDaVez = (req, res) => {
    if (jogada >= jogadores.length) {
        jogada = 0;
    }
    res.send(`É a vez de ${jogadores[jogada]} jogar! Jogada ${jogada + 1} de ${jogadores.length}!`);
    jogada++;
};

//b) Agora criaremos um novo recurso no servidor para remover jogadores do array. Este recurso deverá ser acessado através do endereço http://localhost:8000/remover e deverá receber um parâmetro query chamado indice onde deverá ser informado o índice no array do jogador a ser removido.
const removerJogador = (req, res) => {
    const { id } = req.query;
    if (Number(id) > jogadores.length || Number(id) < 1) {
        res.status(404).send(`Não existe jogador no índice informado (${id}) para ser removido.`);
    } else {
        jogadores.splice(Number(id) - 1, 1);
        res.send(jogadores);
    }
};

//c) Crie um novo recurso no servidor para adicionar jogadores ao array. Este recurso deverá ser acessado através do endereço http://localhost:8000/adicionar e deverá receber um parâmetro query chamado nome onde deverá ser informado o nome do jogador a ser adicionado.
const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query;
    if (number(indice) > jogadores.length || number(indice) < 1) {
        res.status(404).send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`);
    }
    else if (indice && nome) {
        jogadores.splice(Number(indice) - 1, 0, formatarNome(nome));
        res.send(jogadores);
    }
    else if (nome) {
        jogadores.push(formatarNome(nome));
        res.status(201).send(jogadores);
    }
    else {
        res.status(404).send(`Não foi possível adicionar o jogador. Verifique os parâmetros informados.`);
    }
};


// função para formatar o nome do jogador: 
// Os nomes dos jogadores deverão ser sempre adcionados ao array com a primeira letra maiúscula e as demais letras minúsculas.
const formatarNome = (nome) => {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
};