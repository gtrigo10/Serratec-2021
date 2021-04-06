 /**
  * 12.	O programa “bem-vindo” pergunta seu nome e sobrenome, e depois gentilmente te cumprimenta.
  */
 
 const ler = require("prompt-sync")();
  var nome = ler("Qual é o seu nome? ");
  var sobreNome = ler("E o seu sobrenome? ");

  console.log("Olá " + nome + " "+  sobreNome + " seja bem vindo ao universo de programação");