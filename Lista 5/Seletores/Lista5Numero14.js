14.//	A “SuperCalc” é a calculadora que, além dos números, lê o operador que será aplicado, 
//e depois realiza a operação. Considere as entradas na ordem: 
//primeiro número, sinal (+, -, * ou /) e segundo número.

  const ler = require("prompt-sync")();
  var numero1 = ler("Digite o primeiro numero: ");
  var numero2 = ler("Digite o segundo numero: ");
  var operacao = ler("Digite a operação desejada: + - * / ");

  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);

  if(operacao == "+")
    console.log(numero1 + numero2);

  else if (operacao == "-")
    console.log(numero1 - numero2);

  else if (operacao == "*")
    console.log(numero1 * numero2);

  else if (operacao == "/")
    console.log(numero1 / numero2);