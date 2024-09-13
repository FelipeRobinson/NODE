module.exports = (aplicacao) => {
  aplicacao.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  const clientesController = require('../CONTROLLERS/controllerCLIENTES');
  const obj_clieController = new clientesController();

  aplicacao.get("/vitrineClientes",obj_clieController.exibeDadosClientes());
  aplicacao.get("/exclusaoClientes/:id",obj_clieController.excluiCliente());
  aplicacao.get("/formularioInclusaoNovoCliente", (req,res) => {
    console.log("Formulario de conclusão aberto...");
    res.render("../views/ejs/inclusaoClientes");
  });

  aplicacao.post("/inclusaoNovoCliente", obj_clieController.incluiCliente());

  aplicacao.get("")
}