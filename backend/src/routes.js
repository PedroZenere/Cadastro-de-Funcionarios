const express = require('express');
const routes = express.Router();

const FuncionarioController = require('./controllers/FuncionarioController');

routes.post('/cadastro', FuncionarioController.create);
routes.get('/quadro', FuncionarioController.index);

routes.post('/telemail', FuncionarioController.create_telefone_email);

routes.put('/cadastro', FuncionarioController.update);
routes.delete('/cadastro', FuncionarioController.delete);


module.exports = routes;