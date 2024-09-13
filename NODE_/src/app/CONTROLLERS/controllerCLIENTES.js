const bd = require("../../config/database");
const CLIENTES = require("../BD/crudCLIENTES");
const clientesCrud = require("../BD/crudCLIENTES");

class controllerCLIENTES {
   exibeDadosClientes() {
      return function(req,res) {
         const clieCRUD = new CLIENTES(bd);
         clieCRUD.dadosVindosTabelaClientes()
         .then((resultados) => {
            console.log(resultados);
            console.log("Exibindo: LISTA DE CLIENTES");
            res.render('../views/ejs/listagemClientes', { clientes: resultados });
         })
         .catch(erro => console.log(erro));
      }
   }

   exibeDadosID() {
      return function(req, res) {
         var idClie = req.params.id.substring(3,5);
         console.log(idCliente);
         const clieCRUD = new CLIENTES(bd);
      }
   }

   excluiCliente() {
      return function(req,res) {
         var idCliente = req.params.id.substring(3,5);
         const clieCRUD = new CLIENTES(bd);

         console.log(idCliente);

         clieCRUD.apagaDadosTabelaClientes(idCliente)
         .then(() => {
            console.log("Excluindo: CLIENTE");
            res.redirect('/vitrineClientes');
         })
         .catch(erro => console.log(erro));
      }
   }

   incluiCliente() {
      return function(req, res) {
         var dados = req.body;

         console.log(dados);
         const clieCrud = new CLIENTES(bd);

         clieCrud.insereDadosTabelaClientes(dados)
         .then(() => {
            console.log("Incluindo: CLIENTE");
            res.redirect('/vitrineClientes');
         })
         .catch(erro => console.log(erro));
      }
   }
}

module.exports = controllerCLIENTES;