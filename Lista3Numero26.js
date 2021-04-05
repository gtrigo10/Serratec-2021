  const ler = require("prompt-sync")();
  var tamanho = ler("Digite o tamanho da garrafa em ml ");
  var alcool = parseFloat(tamanho) * 0.7;
  var gel = parseFloat(tamanho) * 0.3;

  console.log("A quantidade de alcool é " + alcool + "ml e a quantidade de gel é " + gel);