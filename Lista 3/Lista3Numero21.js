 /**
  * 21.	Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, 
  * pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. 
  * Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela
  * : 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.
  */
 
 
 var jogos = 345;
  var videogame = 1545;

  console.log("3x sem juros com parcelas de " + (jogos + videogame)/3 );
  console.log("\n5x sem juros com parcelas de " + (jogos + videogame)/5 );
  console.log("\n10x sem juros com parcelas de " + ((jogos + videogame) * 1.5/100) + (jogos + videogame)/10);