/**
 * 9.	Vou tomar a tabuada! O aluno de matemática escolhe o número, 
 * e o sistema lhe ensina a contar.
 */

  const ler = require("prompt-sync")();

  var numero = ler("Digite o numero: ");

  for(let i = 0; i <=10 ; i++){
    let multiplicacao = numero * i;
    console.log("Tabuada de " + numero);
    console.log(multiplicacao);
  }