const { body, param } = require('express-validator');
const { validarCampos } = require('../middlewares/validationMiddleware');


const validarCadastroLivro = [
    body('titulo').isLength({ min: 1 }).withMessage('O campo "titulo" deve ser informado'),
    param('id').notEmpty().isLength({ min: 1 }).withMessage('O campo "Id" do autor deve ser informado'),
    validarCampos
];
const validarBuscaLivroPorId = [
    param('id').notEmpty().isInt().withMessage('O campo "id" deve ser um número inteiro'),
    validarCampos
];
const validarAtualizacaoLivro = [
    param('id').notEmpty().isInt().withMessage('O campo "id" deve ser um número inteiro'),
    body('titulo').isLength({ min: 1 }).withMessage('O campo "titulo" deve ser informado'),
    body('autorId').isLength({ min: 1 }).withMessage('O campo "autorId" deve ser informado'),
    validarCampos
];
const validarRemovecaoLivro = [
    param('id').notEmpty().isInt().withMessage('O campo "id" deve ser um número inteiro'),
    validarCampos
];

module.exports = {
    validarCadastroLivro,
    validarBuscaLivroPorId,
    validarAtualizacaoLivro,
    validarRemovecaoLivro
};  