/**
 * 5.	Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, 
 * a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, 
 * o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10

 */

  const ler = require("prompt-sync")();

  var p1 = ler("Digite sua nota na p1: ");
  var p2 = ler("Digite sua nota na p2: ");

  p1 = Number(p1);
  p2 = Number(p2);

  var media = (p1 + p2)/2;

  if(media < 4)
    console.log("Reprovado " + media);
  else if((media < 6) && (media >= 4))
    console.log("Recuperação " + media);
  else if((media < 8) && (media >= 6))
    console.log("Aprovado " + media);
  else if((media <= 10 ) && (media >= 8 ))
    console.log("Destaque " + media);