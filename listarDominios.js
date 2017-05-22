var acceso = require('./js/logic.js')
acceso.init()
acceso.listarDominios(function(resp) {
  console.log(resp)
});
