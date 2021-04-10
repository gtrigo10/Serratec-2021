/**
 * 9.	Na “tabela periódica”, o nome do elemento químico será exibido após a 
 * digitação do seu número atômico. Dica: Você não precisa codificar toda a tabela, 
 * apenas os 15 primeiros ou os mais importantes. Os demais podem ser inseridos por leitura, 
 * ao digitar uma posição não preenchida.
 */

  const ler = require("prompt-sync")();

  var tabela = ["hidrogenio", "helio", "litio", "berilio", "boro", "carbono", "nitrogenio", "oxigenio", "fluor", "neonio", "sodio", "magnesio", "aluminio", "silicio", "fosforo"];

  var contador = 0;

  console.log("Está é uma versão resumida de tabela periodica, temos os 15 primeiros elementos");

  while(contador < 3){
      
      var elementos = ler("Digite o numero de 1 a 15, de acordo com o elemento desejado: ");
      elementos = Number(elementos);
      
      console.log("O numero que você escolheu corresponde a/ao " + tabela[elementos - 1]);
       
      var outro = ler("Deseja escolher outro elemento? ");
      if(outro == "nao"){
          contador = 10;
      }
  }