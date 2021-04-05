  const ler = require("prompt-sync")();

  var primeiro = ler("Digite aqui o primeiro numero: ");

  var segundo = ler("Digite aqui o segundo numero: ");

  var soma = parseInt(primeiro) + parseInt(segundo);
  var diminuicao = primeiro - segundo;
  var multiplicacao = primeiro * segundo;
  var divisao = primeiro / segundo;
  
  console.log("A soma é " + soma);
  console.log("A diminuição é " + diminuicao);
  console.log("A multiplicação é " + multiplicacao);
  console.log("A divisão é " + divisao);