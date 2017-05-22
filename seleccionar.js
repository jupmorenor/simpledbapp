var acceso = require('./js/logic.js')
acceso.init()
acceso.seleccionar("select bases2 from Juanpa where itemName='columna1'", function(res){
  console.log(res)
})
