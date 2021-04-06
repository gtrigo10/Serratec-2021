  /**
   * 10.	O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, 
   * subtraindo dos 4 primeiros números primos a partir de zero.
   */
  
  
  var multiplo = 1004;
  var soma = multiplo + (multiplo + 4) + (multiplo + 8) + (multiplo + 12);
  var resultado = soma - 2 - 3 - 5 - 7;
  console.log(resultado);