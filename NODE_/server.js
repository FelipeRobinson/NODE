const aplicacao = require("./src/config/express");
const porta = 4000

// inicialização do servidor NODE
aplicacao.listen(porta, () => {
    console.log("Servidor ativo");
});