  const ler = require("prompt-sync")();
  var numero = ler("escolha um numero");

  var resultado = numero * numero;

  console.log("O quadrado de " + numero + " é " + resultado);