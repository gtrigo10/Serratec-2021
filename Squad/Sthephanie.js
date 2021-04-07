/**
 * jogo 1 pessoa escolhe um numero de 1 a 10, a outra tenta acertar
 */

  const ler = require("prompt-sync")();

  var jogador1 = ler("Digite o número da sorte: ");
  
  var chance = 0;

  while(chance <= 2){

    var jogador2 = ler("Tente advinhar o número da sorte! ");
    if(jogador1 == jogador2){
        console.log("Parabéns, você acertou o número!");
        chance =3;
    }
    else if ((jogador1 != jogador2) && (chance < 2))
    {
        console.log("Infelizmente você não acertou, mas tem mais uma chance!");
        chance++;
    }
    else
        console.log("Você perdeu!!!");
        chance++;
  }