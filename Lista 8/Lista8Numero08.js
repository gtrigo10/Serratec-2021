/**
 * 8.	A agendinha de contatos agora pode armazenar até 10 nomes e números de telefone, 
 * porém o usuário é quem escolhe em qual posição quer guardar o contato. 
 * Caso a posição já esteja ocupada, ele será questionado se quer ou não substituir. 
 * Todos os contatos continuam sendo exibidos ao final. 
 * Mas as posições ainda não utilizadas aparecem com o texto <vazio>.
 */

  const ler = require("prompt-sync")();

  
  

  var contato = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio"];
  var contatoNumero = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio"];

  var contador = 0;

  while(contador < 5){
   
    var adicionar = ler("Digite o nome do novo contato: ");
    var numero = ler("Digite o número do novo contato: ");
    var posicao = ler("Qual posição você quer escolher? 0 a 9 ");
    
    if(contato[posicao] == "vazio"){
         contato[posicao] = adicionar;
         contatoNumero[posicao] = numero;
    }
    else{
        var substituir = ler("Já existe um contato nessa posição, deseja substituir? ");
        if(substituir == "sim"){
            contato[posicao] = adicionar;
            contatoNumero[posicao] = numero;
          }
    }
    var outro = ler("Deseja adicionar outro contato? ");
    if(outro == "nao"){
        console.log(contato , contatoNumero);
        contador = 10;
    }
     
}