/**
 * 7.	O programa “Compromissos” gerencia a sua agenda do mês. 
 * Você pode digitar um compromisso, informando o dia e a descrição do evento, 
 * e consultar se existe algum apontamento para determinado dia.
 */

  const ler = require("prompt-sync")();

  var compromisso = [];

  for(let i = 1; i < 31 ; i++){
      compromisso.push([i]);
  }

  compromisso[7] = "Reunião Scrum";
  compromisso[14] = "Reunião Scrum";
  compromisso[21] = "Reunião Scrum";
  compromisso[28] = "Reunião Scrum";

  var consulta = ler("Digite o dia que você quer: ");

  if((consulta == "7") || (consulta == "14") || (consulta == "21") || (consulta == "28")){
      console.log("Você tem algo marcado nesse dia, " + compromisso[7]);
  }
  else
    console.log("Este dia está vago");