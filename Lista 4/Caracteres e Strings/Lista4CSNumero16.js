  /**
   * 16.	O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário em um mês, 
   * o valor que ele recebe por hora e o percentual de desconto para o INSS, e calcula:
a.	O salário bruto (horas trabalhadas * valor hora)
b.	O valor do desconto para o INSS
c.	O salário líquido (adicionais menos descontos).
d.	Após os cálculos, será impresso o contracheque. O contracheque é a exibição no console das informações com 
formatação: Salário bruto, valor do desconto do INSS, e o salário líquido do funcionário.

   */
  
  const ler = require("prompt-sync")();
  var hora = ler("Digite a quantidade de horas trabalhadas ");
  var valor = ler("Digite o valor da hora ");
  var desconto = ler("Digite o valor do percentual de desconto ");

  var salario = hora * valor;
  var inss = salario * (desconto/100);
  var liquido = salario - inss;

  console.log("O valor do salario bruto é " + salario + " o desconto do inss foi de " + inss + " e o salario liquido é " + liquido);