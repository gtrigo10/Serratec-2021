/**
 * 1- mostre 3 destinos para o cliente
2- deixe o cliente escolher um dos lugares
3- apresente o (ou os) pacotes para a escolha do cliente
4- depois que ele escolher // boa viagem (se quiser incremente mais como dito acima)
 */

  const ler = require("prompt-sync")();

  console.log("Temos 3 pacotes de viagem para você, escolha um destinho!");
  var destino = ler("Digite 1 para Egito, 2 para Espanha e 3 para Inglaterra: ");

  if(destino == "1"){
      console.log("Para o Egito nós temos um pacote de 7 dias e 8 noites ou um pacote com 15 dias e 14 noites!");
      var egito = ler("Digite 7 ou 15 para escolher o pacote!");
      if(egito == "7"){
          console.log("Parabéns por adquirir a viagem para o Egito de 7 dias! Boa viagem");
      }
      else if(egito == "15"){
        console.log("Parabéns por adquirir a viagem para o Egito de 15 dias! Boa viagem");
      }
  }
  else if(destino == "2"){
    console.log("Para a Espanha nós temos um pacote de 10 dias e 9 noites, um pacote com 15 dias e 14 noites ou um super pacote de 25 dias e 24 noites que percorre 4 paises da Europa!");
    var espanha = ler("Digite 10, 15 ou 25 para escolher o pacote!");
    if(espanha == "10"){
        console.log("Parabéns por adquirir a viagem para a Espanha de 10 dias! Boa viagem");
    }
    else if(espanha == "15"){
      console.log("Parabéns por adquirir a viagem para a Espanha de 15 dias! Boa viagem");
    }
    else if(espanha == "25"){
      console.log("Parabéns por adquirir a viagem para a Espanha de 25 dias! Boa viagem");
    }
  }
  if(destino == "3"){
    console.log("Para a Inglaterra nós temos um pacote de 7 dias e 8 noites");
    var inglaterra = ler("Digite 7 para escolher o pacote!");
    if(inglaterra == "7"){
        console.log("Parabéns por adquirir a viagem para a Inglaterra de 7 dias! Boa viagem");
    }
}