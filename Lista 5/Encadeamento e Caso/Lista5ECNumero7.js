/**
 * 7.	No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. 
 * Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho. 
 * Ao finalizar, o pedido é enviado para a cozinha.
 */

  const ler = require("prompt-sync")();

  var pedido1 = ler("Escolha um complemento: ");
  var pedido2 = ler("Escolha outro complemento: ");

  //var Q = "Queijo", B = "Bacon", A = "Alface", T = "Tomate", P = "Picles";

  if(((pedido1 ) == ("A" || "T" || "P")) || ((pedido2 ) == ("A" || "T" || "P"))){
      var molho = ler("Deseja adicionar um molho? ")
      
      if(molho == "sim"){
          console.log("Lanche com " + pedido1 + " e " + pedido2 + " com molho");
      }
      else{
        console.log("Lanche com " + pedido1 + " e " + pedido2 + " sem molho");     
       }
  }
  else
    console.log("Lanche com " + pedido1 + " e " + pedido2);