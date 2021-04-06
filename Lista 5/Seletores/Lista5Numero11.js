11.	//Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. 
//Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. 
//Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.

  const ler = require("prompt-sync")();
  var total = ler("Digite o seu total de vendas: ");

  var comissao;
  var comissaoAdicional;
  
  if( total <= 5000)
  {
      comissao = total * 0.05;
      comissaoAdicional = 0;
  } 
   else
     {
        var adicional = total - 5000;
        comissaoAdicional = adicional * 0.09;
        comissao = (5000 * 0.05) + comissaoAdicional;
     }
  console.log("Vendas totais: " + total + "\nSua comissão: " + comissao + "\nValor adicional: " + comissaoAdicional);
