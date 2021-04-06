  /**
   * 14.	O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função, 
   * além do valor do empréstimo que deseja contratar. Então será calculado 86% do valor desejado como 
   * crédito disponível. A resposta ao cliente deve seguir o exemplo abaixo.
  Para escrever as mensagens, utilize variáveis com concatenação de strings. 
  O valor será escrito separadamente (no console.log).

   */
  
  const ler = require("prompt-sync")();
  var nome = ler("Qual o seu nome? ");
  var funcao = ler("Qual a sua função? ");
  var empresa = ler("Qual empresa você trabalha? ");
  var emprestimo = ler("Qanto você deseja de empréstimo? ");
  
  console.log("Senho " + nome + ", você está com sorte! Pela sua função de " + funcao + ", e sua excelente relação com a empresa "
  + empresa + ", foi aprovado um crédito em sua conta corrente de " + emprestimo*0.8);
