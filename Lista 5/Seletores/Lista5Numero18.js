//18.	Os jogadores querem que o programa “Par ou ímpar” escreva respostas mais completas. 
//Dessa vez, eles querem fazer sua escolha antes de digitar os números.

  const ler = require("prompt-sync")();
  var primeiro = ler("Jogador 1 escolha par ou impar: ");
  var dedos1 = ler("Quantos dedos? ");
  var dedos2 = ler("Jogador 2, quantos dedos? ");

  var total = parseInt(dedos1) + parseInt(dedos2);
  var resultado;
  var venceu;
  var primeiroJogador;

  if (total % 2 == 0)
  {
      resultado = "par";
  }
  else if (total % 2 == 1)
  {
      resultado = "impar";
  }

  venceu = resultado;
  
  if(primeiro == venceu)
  {
      primeiroJogador = "1";
  }
  else
    primeiroJogador = "2";


  console.log("A soma é " + total + " como esse número é " + resultado + " o jogador " +  primeiroJogador + " venceu");