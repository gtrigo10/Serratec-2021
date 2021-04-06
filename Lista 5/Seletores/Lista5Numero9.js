9.	//Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. 
//Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. 
//O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

  const ler = require("prompt-sync")();
  var numeroBoleto = ler("Digite qui o número do boleto: ");
  var diaPagamento = ler("Digite o dia do pagamento: ");
  
  var desconto = false;

  if( (10 <= diaPagamento) && (diaPagamento <= 13) )
    desconto = true;

  console.log("Número do boleto: " + numeroBoleto + "\nDia do pagamento: " + diaPagamento 
  + "\nDesconto na proxima mensalidade? " + desconto);