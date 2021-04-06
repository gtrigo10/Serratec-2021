  /**
   * 20.	O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.
   */
  
  const ler = require("prompt-sync")();
  var numero = ler("escolha um numero");

  var resultado = numero * numero;

  console.log("O quadrado de " + numero + " é " + resultado);