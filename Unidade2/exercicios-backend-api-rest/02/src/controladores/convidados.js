let ListaDeconvidados = require('../dados/convidados')


const listaConvidados = (req, res) => {
    //Consultar se existe um nome específico na lista de convidados
    const { nome } = req.query
    if (nome) {
        const convidado = ListaDeconvidados.find(convidado => convidado === nome)
        if (convidado) {
            return res.status(200).json({ mensagem: "Convidado presente." })
        }
        return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista." })
    }
    // Consultar a lista inteira de convidados
    return res.status(200).json(ListaDeconvidados)
};

const adicionarConvidado = (req, res) => {
    const { nomeParams } = req.body

    // transformando a primeira letra do nome em maiúscula
    const nome = nomeParams.charAt(0).toUpperCase() + nomeParams.slice(1)

    if (!nome) {
        return res.status(400).json({ mensagem: "O nome do convidado é obrigatório." })
    }
    const convidado = ListaDeconvidados.find(convidado => convidado === nome)
    if (convidado) {
        return res.status(400).json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }
    if (nome.length < 3) {
        return res.status(400).json({ mensagem: "O nome do convidado deve ter pelo menos 3 caracteres." })
    }
    if (nome.length > 50) {
        return res.status(400).json({ mensagem: "O nome do convidado deve ter no máximo 50 caracteres." })
    }
    if (typeof nome !== "string") {
        return res.status(400).json({ mensagem: "O nome do convidado deve ser um texto." })
    }
    ListaDeconvidados.push(nome)
    return res.status(201).json({ mensagem: "Convidado adicionado" })
};
const removerConvidado = (req, res) => {
    const { nomeParams } = req.params
    if (!nomeParams) {
        return res.status(400).json({ mensagem: "O nome do convidado é obrigatório." })
    }
    const nome = nomeParams.charAt(0).toUpperCase() + nomeParams.slice(1)
    const convidado = ListaDeconvidados.find(convidado => convidado === nome)
    if (!convidado) {
        return res.status(404).json({
            mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
        })
    }
    const index = ListaDeconvidados.indexOf(convidado)
    ListaDeconvidados.splice(index, 1)
    return res.status(200).json({ mensagem: "Convidado removido" })
};


module.exports = {
    listaConvidados,
    adicionarConvidado,
    removerConvidado
}