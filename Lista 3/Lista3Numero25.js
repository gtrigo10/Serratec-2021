  /**
   * 25.	O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. 
   * O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.
   */
  
  const ler = require("prompt-sync")();
  var pontos = ler("Digite aqui a quantidade de cupons");

  var resultado = pontos * 3;

  console.log("Você possui " + resultado + " pontos");