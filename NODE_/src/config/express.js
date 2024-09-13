const express = require("express");
// criando a minha aplicação express
const aplicacao = express();
const bodyParser = require("body-parser");

// configura o pacote EJS
const expressLayout = require("express-ejs-layouts");
aplicacao.set("view engine","ejs");
aplicacao.set("views","./views");
aplicacao.use(expressLayout);

// habilitar o bordy-parser para tratar dados em JSON
aplicacao.use(
   bodyParser.urlencoded({
      extended: true,
   })
);

// associado o arq rotas na aplicação (express)
const rotas = require("../app/ROTAS/rotas");
rotas(aplicacao);

module.exports = aplicacao;