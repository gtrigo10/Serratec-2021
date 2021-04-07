/**
 * 4.	O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos. 
 * Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de direcionamento:
acima de 67 anos = Por quê não vacinou ainda?
Abaixo de 67 anos = Volte na próxima semana
67 anos completos = Vacinação hoje.

 */

  const ler = require("prompt-sync")();

  var idade = ler("Digite sua idade: ");

  if(idade > "67")
    console.log("Porque não vacinou ainda?");
  else if(idade == "67")
    console.log("Vacinação hoje");
  else
    console.log("Volte na proxima semana.");