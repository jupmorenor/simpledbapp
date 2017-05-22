var dom = 0;
var acceso = require('./js/logic.js')
var dominios;
acceso.init()
acceso.listarDominios(function(resp) {
  dominios=resp;
  if (resp.length > 1) {
    while (resp[dom] != 'Juanpa') {
      dom++;
    }
    var resultado;
    acceso.consultar(resp[dom], 'MisNotas', function(resp){
      console.log(resp);
    });
  }
});
