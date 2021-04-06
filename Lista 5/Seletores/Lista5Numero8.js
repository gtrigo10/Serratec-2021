8.	//A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções.
// O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”.
// Após as entradas, receberá a avaliação na tela.

  const ler = require("prompt-sync")();
  var nome = ler("Digite o nome do paciente ");
  var ok = ler("O paciente já foi vacinado? ");

  var resultado = true;

  if(ok == "sim")
    console.log("Sujeito a infecção? " + !resultado);

    else
        console.log("Sujeito a infeccção? " + resultado);

