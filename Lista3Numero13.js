  const ler = require("prompt-sync")();
    
  var celsius = ler("Digite aqui a temperatura em celsius");


  var farenheit = celsius*1.8 + 32;

  console.log(farenheit);