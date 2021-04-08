/**
 * 12.	O “cara ou coroa estatístico” vai jogar a moeda mil vezes, 
 * e depois demonstrar percentualmente as aparições de caras ou coroas.
Pesquise sobre a função de números aleatórios, para sortear um número 
e usá-lo como sendo a resposta da moeda.
 */

  var contadorPar = 0;
  var contadorImpar = 0;

  for(let i = 0; i < 1000; i++){
    var aleatorio = Math.trunc(Math.random() * 10);

    if( aleatorio == 0){
        contadorPar++;
      }
       else if(aleatorio % 2 == 0){
        contadorPar++;
      }
      else if(aleatorio % 2 == 1){
        contadorImpar++;
      }
   }

   console.log("O número de vezes que saiu par foi: " + contadorPar);
   console.log("O número de vezes que saiu impar foi: " + contadorImpar);