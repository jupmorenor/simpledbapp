var acceso = require('./js/logic.js')
acceso.init()
acceso.consultar('DominioPorDefecto', 'MisNotas', function(resp){
  console.log(resp);
});
