/**
 * 12.	Dois amigos vão utilizar o programa “Maioral”. 
 * Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro 
 * no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
 */

  const ler = require("prompt-sync")();

  var primeiro = ler("Digite seu numero: ");
  var segundo = ler("Digite seu numero: ");

  var resultado1 = primeiro > segundo;
  var resultado2  = segundo > primeiro;
  var resultado3  = primeiro == segundo;

  console.log("Player 1 venceu? " + resultado1);
  console.log("Player 2 venceu? " + resultado2);
  console.log("Empatou? " + resultado3);