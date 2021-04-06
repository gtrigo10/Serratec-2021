/**
 * 1.	A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, 
 * onde o dígito final do documento será utilizado para permitir a entrada nas lojas.
 *  CPF final “par” somente pode sair nos dias pares, e de igual modo, 
 * o dia ímpar é destinado aos documentos ímpares.
 */

  const ler = require("prompt-sync")();

  var dia = ler("Digite o dia de hoje: ");
  var cpf = ler("Digite o ultimo digito do seu cpf: ");

  var pode = (dia % 2) == (cpf % 2);

  console.log("Autorizado a entrar na loja? " + pode);