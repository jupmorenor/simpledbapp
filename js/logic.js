var simple = require("simpleDB");
var db = null
module.exports = {
  init:function() {
    db = new simple.SimpleDB(
      {keyid:'AKIAJM4AD54YPK263LGA',
      secret:'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'}
      //,simple.debuglogger
    );
  },
  consultar:function(dominio, elemento, callback) {
    var resp;
    db.getItem(dominio, elemento, function(err,res,meta) {
      if(!err){
        callback(JSON.stringify(res));
      }
    });
  },

  listarDominios:function (callback) {
    db.listDomains(function(err,res,meta) {
      if(!err){
        callback(res);
      } else {
        console.log('Ha ocurrido un error!!!', err);
      }
    });
  },

  crearDominio:function (dominio) {
    db.createDomain(dominio, function(err,res,meta) {
      if(!err) {
        console.log(dominio+ ' ha sido creado');
      } else {
        console.log('Ha ocurrido un error!!!', err);
      }
    });
  },
  eliminarDominio:function(dominio){
    db.deleteDomain(dominio, function(err,res,meta){
      if(err) {
        console.log("no se pudo eliminar el dominio " + dominio)
      } else {
        console.log("dominio "+ dominio +" eliminado con exito")
      }
    })
  },
  insertar:function (dominio, elemento, datos) {
    db.putItem(dominio, elemento, datos,
      function(err,res,meta){
        if(!err) {
          console.log('agregado: ', JSON.stringify(res));
        } else {
          console.log('Ha ocurrido un error!!!', err);
        }
      }
    );
  },

  seleccionar:function(query, callback) {
    db.select(query, function(err,res,meta){
      callback(JSON.stringify(res));
    })
  },
  borrar:function(dominio, elemento, atrib, callback) {
    db.deleteItem(dominio, elemento, atrib, function() {

    })
  }
}
