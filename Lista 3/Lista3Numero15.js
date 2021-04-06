  /**
   * 15.	Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. 
   * Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.
   */
  
  
  const ler = require("prompt-sync")();
  var produtos = ler("Digite o numero de itens que você comprou: ");

  console.log("Parabéns por comprar " +produtos + " produtos!");