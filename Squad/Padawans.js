/**
 * Crie um jogo em que você vai ter que escolher entre 3 armas para enfrentar o 
 * grande dragão malvado "Progradragão". As armas são uma espada, uma faca e um sapato. 
 * Só uma dessas opções que vai garantir a vitória contra o dragão Antes de começar o jogo, 
 * o mesmo vai pedir o nome do herói, acrescente o nome do herói nos textos do jogo.
 */

  const ler = require("prompt-sync")();

  console.log("O temivél Progradragão assola nosso povo há decadas, será você o Herói lendário?");
  var nome = ler("Bravo Herói, diga-nos no seu nome: ");

  console.log("É perigoso lá fora, escolha um destes itens antes de partir! ");
  var arma = ler("É apresentado três itens a você, 1 - Uma faca almadiçoada, 2 - A famosa espada DragonSlayer e 3 - Um salto alto maravilhoso, diva. Escolha com cuidado");

  if(arma == "1"){
      console.log("Ao tocar na arma amaldiçoada, você sente todo o poder da maldição. Sim, você pensa consigo, este poder pode derrotar o dragão com certeza, contudo, ao sair do castelo você é morto pela maldição... Oquê você estava esperando?");
  }
  else if(arma == "2"){
      console.log("A famosa DragonSlayer, arma lendária que já matou muitos dragões antes, a escolha perfeita para acabar com esta peste. Ao entrar no covil do dragão, uma feroz batalha se inicia, contudo você percebe que com o passar do tempo, seus golpes começam a fazer menos efeito. O progradragão ri de você e diz que uma dragonslayer não é necessariamente uma arma ideal para se matar um progradragão. Você perdeu.");
  }
  else if(arma == "3"){
      console.log("Por alguma razão que só Deus sabe, você escolhe um salto alto, apesar de ficar lindo neles, não parece ser uma arma ideal para matar o monstro, mas vale a tentativa. Ao se encontrar com o progradragão, o monstro fica impressionado com seu visual avassalador e pergunta se você não tem outro par de salto para ele, você oferece seu par ao monstro com a condição dele parar de aterrorizar o reino, e ele gentilmente agradeçe concordando com sua condição. Parabéns, você venceu!!");
  }
