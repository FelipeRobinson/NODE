class CLIENTES {
  constructor(conexaoBD) {
    this._bd = conexaoBD;
  }

  dadosVindosTabelaClientes() {
    return new Promise((resolve,reject) => {

     var sql = 'SELECT idClie, nomeClie, ';
        sql += 'DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie,';
        sql += 'emailClie, cpfClie';
        sql += ' FROM CLIENTES ORDER BY idClie';
     console.log(sql);

     this._bd.query(sql,function(erro, recordset) {
       if (erro) {
         console.log(erro);
         return reject("FALHA NA LISTAGEM DE CLIENTE!");
       }
       return resolve(recordset);
      });
    }); 
  }

  dadosVindosTabelaClientesProId(idClientes) {
    return new Promise((resolve,reject) => {

     var sql = "SELECT idClie, nomeClie, ";
        sql += "DATE_FORMAT(dataNiverClie,'%d/%m/%Y') as dataNiverClie,";
        sql += "emailClie, cpfClie";
        sql += " FROM CLIENTES WHERE idClie = '" + idCliente + "'";
     console.log(sql);

     this._bd.query(sql,function(erro, recordset) {
       if (erro) {
         console.log(erro);
         return reject("FALHA NA LISTAGEM DE CLIENTE!");
       }
       return resolve(recordset);
      });
    }); 
  }

  // método do INSERT
  insereDadosTabelaClientes(dados) {
    return new Promise((resolve,reject) => {
      console.log("ENTRADA CONFIRMADA: CRUD")

      // o campo não é IDENTITY, por isso precisamos alteralo para que ele não insira os dados com o mesmo id
      var contador = Math.random();
      if (contador == 1)
        contador = (contador + 2) * 2;
      else
        contador = Math.floor(Math.random() * 100 + contador+2);

      // COMANDO SQL
      var sql = "INSERT INTO CLIENTES VALUES(" + contador + ",'" + dados.cpfClie + "','";
         sql += dados.nomeClie + "','" + dados.dataNiverClie + "','"; 
         sql += dados.emailClie + "')";
      console.log(sql);
 

      this._bd.query(sql,function(erro) {
        if (erro) {
          console.log(erro);
          return reject("FALHA NA LISTAGEM DE CLIENTE!");
        }
        return resolve("NOVO CLIENTE INCLUSO!");
       });
     });
  }

  // método do UPDATE
  atualizaDadosTabelaClientes() {

  }

  // método do DELETE
  apagaDadosTabelaClientes(ID) {
    return new Promise((resolve,reject) => {
      var sql = 'DELETE FROM CLIENTES WHERE IDCLIE = ' + ID;
      console.log(sql);

      this._bd.query(sql,function(erro) {
        if (erro) {
          console.log(erro);
          return reject("NÃO FOI POSSÍVEL APAGAR O DADOS DO BANCO!");
        }
        return resolve("CLIENTE EXCLUIDO COM SUCESSO!");
      });
    });
  }
}

module.exports = CLIENTES;