/**
 * CATRACA:

A catraca do onibus quebrou e a empresa precisa dos dados da viagem.
Os dados necessários para a empresa são quando a pessoa entra no onibus são as seguintes:

    Quantas pessoas ja entraram no onibus até o momento; 
    Se a pessoa é pagante ou entra com gratuidade;
    O total dos ganho até o momento (Considerando a passagem a R$ 4,40).
 */

  const ler = require("prompt-sync")();

  var quantidade = ler("Quantos passageiros entraram no onibus? ");

  quantidade = Number(quantidade);
  
  var contadorPagantes = 0;

  for(let i = 0 ; i < quantidade; i++){

    var gratis = ler("Você pode entrar de graça? ");

    if(gratis == "nao"){
      contadorPagantes++;
    }
      
  }
  var perda = contadorPagantes * 4.4;

  console.log("A quantidade de perdas foi de " + perda + " reais");