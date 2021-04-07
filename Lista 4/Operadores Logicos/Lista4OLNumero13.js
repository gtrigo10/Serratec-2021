/**
 * 13.	Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. 
 * Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
 */

  const ler = require("prompt-sync")();
  var temperatura = ler("Qual a sua temperatura? ");
  var mascara = ler("Esta usando mascara? ");


  var podeEntrar = ((temperatura < 37.5) && (mascara == "sim"));
  
  console.log("Usa mascara? " + mascara + "\nTemperatura: " + temperatura + "\nPode entrar? " + podeEntrar) ;
