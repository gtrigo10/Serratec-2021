/**
 * 11.	Para ajudar a criança que ainda não sabe contar “ímpar par”, 
 * o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).
 */

  const ler = require("prompt-sync")();

  var numero = Number(ler("Escolha até qual número você quer: "));

  var escolha = ler("Você quer ver os números pares ou impares? ");

  var bora =  0;

  while(bora < numero){

    if(escolha == "par"){
      if(bora % 2 == 0){
        console.log(bora + " é par");
        bora++;
      }
    else
      bora++;
    }
    if(escolha == "impar"){
      if(bora % 2 == 1){
        console.log(bora + " é impar");
        bora++;
      }
    else 
      bora++;
    }
  }
  

  