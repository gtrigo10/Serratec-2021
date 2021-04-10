/**
 * 6.	No sistema “Portão do estádio” a entrada dos torcedores é controlada 
 * de forma organizada e pacífica. O sistema solicita o número do bilhete e 
 * direciona o torcedor para a arquibancada. 
 * Contudo, se algum mal intencionado furar a fila (indicado por um bilhete com número negativo), 
 * a entrada por aquele portão é fechada em definitivo, 
 * e todos precisarão ser encaminhados para outro portão.
 */

  const ler = require("prompt-sync")();

  
  var bilhete = 2;

  while(bilhete > 0){

    bilhete = ler("Digite o numero do seu bilhete: ");

    if(bilhete < 0){
        console.log("ERRO, O portão será fechado, dirija-se para outro...");
        break;
    }

  }