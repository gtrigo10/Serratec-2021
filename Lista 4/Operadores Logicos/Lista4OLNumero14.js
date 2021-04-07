/**
 * 14.	É considerado “Emancipado” qualquer pessoa a partir de 21 anos, 
 * ou o indivíduo do sexo masculino a partir dos 18 anos. 
 * Crie um programa para atestar a emancipação do cidadão segundo o ano do seu nascimento.
 */

  const ler = require("prompt-sync")();

  var idade = ler("Digite o ano em que você nasceu: ");
  var sexo = ler("Digite M ou F para o seu sexo: ");

  var resultado = (((2021 - idade) >= 21) || (sexo == "M") );

  console.log("Sexo: " + sexo + "\nAno de nascimento: " + idade +
   "\nCidadão emancipado? " + resultado);