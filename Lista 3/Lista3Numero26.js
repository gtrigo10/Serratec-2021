  /**
   * 26.	O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal 
   * para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade 
   * da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados 
   * para preenchimento do vasilhame.
   */
  
  const ler = require("prompt-sync")();
  var tamanho = ler("Digite o tamanho da garrafa em ml ");
  var alcool = parseFloat(tamanho) * 0.7;
  var gel = parseFloat(tamanho) * 0.3;

  console.log("A quantidade de alcool é " + alcool + "ml e a quantidade de gel é " + gel);