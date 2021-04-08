/**
 * CINEMA:

1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia entrada, 
para a reserva, basta informar o nome e se é meia ou não, é permitido apenas uma reserva por nome.
2. Após os 5 reservados, o cliente pode retirar se ingresso informando o seu nome, 
o ingresso irá informar seu número, nome de quem reservou e se é meia ou não.
 */

  const ler = require("prompt-sync")();

  var inteira = 3;
  var meiaEntrada = 2;
  
  for(let i = 0; i < 5; i++){

    var reserva = ler("Digite se nome para fazer a reserva: ");
    var numeroIngresso = ler("Digite o número do ingresso que você quer: ");
    var meia = ler("O seu ingresso é meia?: ");

    if((meia == "sim") && (meiaEntrada >= 0)){
        meiaEntrada--;
    }
        else{
            console.log("Não temos mais meia");
        }
        
    if((meia == "nao") && (inteira >= 0)){
        inteira--;
    }
        else{
            console.log("Não temos mais inteira!");
        }
    console.log("O ingresso de número " + numeroIngresso + " pertencente a " + reserva +
    " é meia? " + meia);

  }