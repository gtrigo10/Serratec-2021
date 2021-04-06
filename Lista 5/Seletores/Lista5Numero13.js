13.	//O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. 
//Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos em dinheiro. 
//Ao receber o valor do pagamento, o sistema irá emitir um relatório.

  const ler = require("prompt-sync")();
  var valor = ler("Digite o valor : ");

  if(valor <= 1000)
    console.log("Valor: " + valor + "\nPagamento em Dinheiro");
  
  else
    console.log("Valor: " + valor + "\nPagamento em cheque");