  /**
   * 24.	O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, 
   * onde o cliente poderá consultar seu saldo de pontos. 
   * O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.
   */
  
  const ler = require("prompt-sync")();
  var pontos = ler("Digite aqui a quantidade de cupons");

  console.log("Você possui " + pontos + " pontos");