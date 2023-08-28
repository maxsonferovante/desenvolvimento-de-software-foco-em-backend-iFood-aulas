
const numeroDaPaginaEValido = (req, res, next) => {
    const { pag } = req.query;
    if (pag) {
        const numeroPag = parseInt(pag);
        if (isNaN(numeroPag) || numeroPag < 1) {
            return res.status(400).json({ mensagem: "O parâmetro pag deve ser um número maior que zero." });
        }
    }
    next();
};


module.exports = {
    numeroDaPaginaEValido
}
