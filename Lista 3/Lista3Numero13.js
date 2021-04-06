 /**
  * 13.	O programa “termômetro” lê uma temperatura em graus Celsius,
  *  e devolve sua equivalência na escala Fahrenheit.
  */
 
 
  const ler = require("prompt-sync")();
    
  var celsius = ler("Digite aqui a temperatura em celsius");


  var farenheit = celsius*1.8 + 32;

  console.log(farenheit);