  //15.	O programa “Triangular” lê as medidas do triângulo, e informa se ele é equilátero, isósceles ou escaleno

  const  ler = require("prompt-sync")();

  var lado1 = ler("Digite o primerio lado: ");
  var lado2 = ler("Digite o segundo lado: ");
  var lado3 = ler("Digite o terceiro lado: ");

  if((lado1 == lado2) && (lado1 == lado3))
    console.log("O triângulo é equilátero");

  else if( ((lado1 == lado2) && (lado1 != lado3)) || ((lado1 != lado2) && (lado2 == lado3)) || ((lado1 == lado3) && (lado1 != lado2)))
    console.log("O tiângulo é isóceles");

  else if( (lado1 != lado2) && (lado1 != lado3) )
    console.log("O triângulo é escaleno");

  