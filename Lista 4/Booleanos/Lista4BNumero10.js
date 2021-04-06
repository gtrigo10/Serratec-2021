/**
 * 10.	Indique o resultado das expressões relacionais abaixo. 
 * Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. 
 * Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente
a.	x - y M a
b.	x - y * a M c mod y
c.	y <> c
d.	x * y <> c
e.	c mod y mi y mod c
f.	a m b
g.	z / a + x * y - 5 MI b
h.	c * z + 2 = a * x + y
i.	c = z + b
j.	y * 2 <> 7 - b


 */


  var x = 6.0;
  var y = 2;
  var z = 4.000;
  var a = 8;
  var b =7.5;
  var c = 12;
 
  console.log(x - y > a);
  console.log(x - y * a > c%y)
  console.log(y != c)
  console.log(x * y != c)
  console.log((c % y) <= (y %c))
  console.log(a < b)
  console.log((z / a) + (x * y - 5) >= b)
  console.log((c * z + 2) = (a * x + y))
  console.log(c = z + b)
  console.log(y * 2 != 7 - b)
