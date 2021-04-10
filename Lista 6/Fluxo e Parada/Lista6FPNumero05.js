/**
 * 5.	A bilheteria do cinema reservou todas as poltronas terminadas em 6 para deficientes. 
 * A sala de projeção possui 40 lugares, e para cada um, 
 * o sistema irá imprimir se o ingresso pode ser vendido ou não
 */


  for(let i = 0; i < 40; i++){
      if((i == 5) || (i == 15) || (i == 25) || (i == 35)){
          console.log("Esta poltrona está reservada.");
      }
      else
        console.log("Esta poltrona esta vaga");
  }