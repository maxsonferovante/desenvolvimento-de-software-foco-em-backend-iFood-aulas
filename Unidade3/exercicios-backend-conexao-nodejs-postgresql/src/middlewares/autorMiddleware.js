const { body, param } = require('express-validator');
const { validarCampos } = require('../middlewares/validationMiddleware');

const validarCadastroAutor = [
    body('nome').notEmpty().isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres'),
    body('idade').isInt({ min: 18 }).withMessage('A idade mínima é de 18 anos'),
    validarCampos,
];
const validarBuscaAutorPorId = [
    param('id').notEmpty().isInt().withMessage('O id deve ser um número inteiro'),
    validarCampos,
];

const validarAtualizacaoAutor = [
    param('id').notEmpty().isInt().withMessage('O id deve ser um número inteiro'),
    body('nome').notEmpty().isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres'),
    body('idade').isInt({ min: 18 }).withMessage('A idade mínima é de 18 anos'),
    validarCampos,
];

const validarRemocaoAutor = [
    param('id').notEmpty().isInt().withMessage('O id deve ser um número inteiro'),
    validarCampos,
];

module.exports = {
    validarCadastroAutor,
    validarBuscaAutorPorId,
    validarAtualizacaoAutor,
    validarRemocaoAutor,
};