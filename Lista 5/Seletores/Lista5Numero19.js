/**
 * 19.	Para ajudar o operador do Caixa, precisamos emitir a contagem das notas a entregar 
 * ao fornecedor, nos pagamentos até mil Reais.
 */

  const ler = require("prompt-sync")();

  var pagamento1 = ler("Digite o valor do pagamento: ");

  pagamento1 = Number(pagamento1);

  var pagamento = pagamento1;
  var nota100 = 0;
  var nota50 = 0;
  var nota20 = 0;
  var nota10 = 0;
  var nota5 = 0;
  var resto = 0;

  if(pagamento >= 100){
    nota100 = Math.trunc(pagamento / 100); 
    pagamento = (pagamento % 100);
  }
  if((pagamento >= 50) && (pagamento < 100) ){
    nota50 = Math.trunc(pagamento / 50); 
    pagamento = (pagamento % 50);
  }
  if((pagamento >= 20) && (pagamento < 50)){
    nota20 = Math.trunc(pagamento / 20); 
    pagamento = (pagamento % 20);
  }
  if((pagamento >= 10) && (pagamento < 20)){
    nota10 = Math.trunc(pagamento / 10); 
    pagamento = (pagamento % 10);
  }
  if((pagamento >= 5 ) && (pagamento < 10)){
    nota5 = Math.trunc(pagamento / 5); 
    pagamento = (pagamento % 5);
  }
  resto = pagamento;

  
  console.log("Pagamento: " + pagamento1 + "R$\nRelação de cédulas: \n" + nota100 + " de R$100\n" + 
  nota50 + " de R$50\n" + nota20 + " de R$20\n" + nota10 + " de R$10\n" + nota5 + " de R$5\n" + 
  resto + " reais em moedas");