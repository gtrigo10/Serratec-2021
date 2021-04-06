/**
 * 11.	No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o 
 * indivíduo já pode exercer sua cidadania nas urnas. 
 */

  const ler = require("prompt-sync")();

  var idade = ler("Digite sua idade: ");

  var pode = idade >= 16;

  console.log("Você já pode votar? " + pode);