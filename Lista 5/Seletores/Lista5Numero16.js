//16.	O “mini DP” aumentou seus cálculos. 
//Agora, considere a jornada de trabalho semanal de um funcionário, que é de 40 horas. 
//O funcionário que trabalhar mais de 40 horas receberá hora extra, 
//cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
//Considerando que o mês possui 4 semanas exatas, e que a entrada de horas será um valor maior que a jornada normal.
//a.	Salário base (valor da hora * horas normais)
//b.	Valor de horas extras
//c.	Valor do desconto para o INSS
//d.	Salário líquido (Salário base + horas extras – desconto INSS)
//e.	Imprimir na tela o contracheque do funcionário.

const ler = require("prompt-sync")();
var hora = ler("Digite a quantidade de horas trabalhadas ");
var valor = ler("Digite o valor da hora ");
var desconto = ler("Digite o valor do percentual de desconto ");

var salario = hora * valor;
var horaExtra = 0;
var inss = salario * (desconto/100);


if(hora > 40)
{
    horaExtra = (parseFloat(valor) + valor * 0.5) * (hora - 40);
    console.log(horaExtra);
}

var liquido = salario + horaExtra - inss;

console.log("O valor do salario bruto é " + salario + " o desconto do inss foi de " + inss +
 " e o salario liquido é " + liquido);