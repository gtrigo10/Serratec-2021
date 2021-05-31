package src.main.java.br.com.devs_gamers.imc.model.pessoa;

import java.util.ArrayList;

import src.main.java.br.com.devs_gamers.imc.model.usuario.Usuario;

public class Pessoa {

    private ArrayList<Usuario> usuarios;

    public Pessoa(){
        this.usuarios = new ArrayList<Usuario>();
    }

    public void adicionarUsuario(Usuario usuario){
        this.usuarios.add(usuario);
    }
    

}
