const autenticar = (req, res, next) => {
    const { senha } = req.query;
    if (senha === 'cubos123') {
        next();
    } else {
        res.status(401).json({ erro: 'Unauthorized - não autorizado' });
    }
};

module.exports = { autenticar };