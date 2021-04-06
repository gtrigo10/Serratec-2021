  /**
   * 15.	O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" 
   * na pesagem dos pratos. O operador da balança irá digitar o preço do quilo e o total em gramas da refeição, 
   * considerando que o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome do restaurante, 
   * a tara do prato, o preço de 100 gramas, o peso consumido e o valor total.
   */
  
  const ler = require("prompt-sync")();
  var precoQuilo = ler("Digite o preço do quilo ");
  var total = ler("Digite o total ");
  var nome = "Self-Service";
  var tara = 465;


  console.log("O restaurante " + nome + " cuja tara do prato é " + tara + " gramas, e o preço é " + precoQuilo/10 
  + " reais 100 gramas, o peso do seu prato foi de " + (parseFloat(total)-tara) + " gramas, o que quer dizer que o total a pagar é " + precoQuilo/10 * (total-tara));