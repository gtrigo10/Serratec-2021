package src.main.java.br.com.devs_gamers.imc;

import src.main.java.br.com.devs_gamers.imc.model.usuario.TipoSexo;
import src.main.java.br.com.devs_gamers.imc.model.usuario.Usuario;
import src.main.java.br.com.devs_gamers.imc.model.pessoa.Pessoa;
import java.util.Scanner;

public class App{
    public static void main(String[] args) {

        /*var usuario1 = new Usuario("Charizard", 90.5, 1.7, 4, TipoSexo.MASCULINO);

        var usuario2 = new Usuario("Butterfree", 32.0, 1.1, 4, TipoSexo.FEMININO);

        var usuario3 = new Usuario("Squirtle",9.0, 0.5, 5, TipoSexo.MASCULINO);

        var usuario4 = new Usuario("wailord", 398.0, 14.5, 43, TipoSexo.FEMININO);*/

        /*var pessoa = new Pessoa();
        pessoa.adicionarUsuario(usuario1);
        pessoa.adicionarUsuario(usuario2);
        pessoa.adicionarUsuario(usuario3);
        pessoa.adicionarUsuario(usuario4);

        System.out.println("\n");
        System.out.println(usuario1.registro());
        System.out.println("Você está: " + usuario1.getClassificacao());

        System.out.println(usuario2.registro());
        System.out.println("Você está: " + usuario2.getClassificacao());

        System.out.println(usuario3.registro());
        System.out.println("Você está: " + usuario3.getClassificacao());

        System.out.println(usuario4.registro());
        System.out.println("Você está: " + usuario4.getClassificacao());*/
        


        Scanner ler = new Scanner(System.in);


        var usuario1 = new Usuario();
        System.out.println("Digite o seu nome: ");
        usuario1.setNome(ler.next());
        System.out.println("Digite o seu peso: ");
        usuario1.setPeso(ler.nextDouble());
        System.out.println("Digite a sua altura: ");
        usuario1.setAltura(ler.nextDouble());
        System.out.println("Digite a sua idade: ");
        usuario1.setIdade(ler.nextInt());
        System.out.println("Digite 0-> Masculino ou 1-> Feminino: ");
        
        //usuario1.tipoSexo.setEnum(ler.nextInt());
        //(ler.nextInt());

        System.out.println("\n");
        System.out.println(usuario1.registro());
        System.out.println("Você está: " + usuario1.getClassificacao());
        


        //usuario1.TipoSexo NAO SEI

    }
}