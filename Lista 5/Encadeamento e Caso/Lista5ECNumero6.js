/**
 * 6.	O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, 
 * tanto nos plurais quanto na quantidade de visitas.
 */

  const ler = require("prompt-sync")();

  var visitas = ler("Digite o número de visitas: ");

  if(visitas == "1")
    console.log("Você já nos visitou " + visitas + " vez");
  else
    console.log("Você já nos visitou " + visitas + " vezes");