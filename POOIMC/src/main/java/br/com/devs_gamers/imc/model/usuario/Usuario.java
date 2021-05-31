package src.main.java.br.com.devs_gamers.imc.model.usuario;

public class Usuario {
    private String nome;
    private Double peso;
    private Double altura;
    private Integer idade;
    private TipoPeso tipoPeso;
    private Double imc;
    public TipoSexo tipoSexo;

    public Usuario(){}
    public Usuario(
        String nome,
        Double peso,
        Double altura,
        Integer idade,
        TipoSexo tipoSexo
      
    ){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
        this.tipoSexo = tipoSexo;
       
        calculoImc();
    }

    public String getNome(){
        return this.nome;
    }
    
    public void setNome(String nome){
        this.nome = nome;
    }

    public Double getPeso(){
        return this.peso;
    }
    
    public void setPeso(Double peso){
        this.peso = peso;
        calculoImc();
    }

    public Double getAltura(){
        return this.altura;
    }
    
    public void setAltura(Double altura){
        this.altura = altura;
        calculoImc();
    }

    public Integer getIdade(){
        return this.idade;
    }
    
    public void setIdade(Integer idade){
        this.idade = idade;
    }
    
    public TipoSexo getTipoSexo(){
        return this.tipoSexo;
    }
    
    public void setTipoSexo(TipoSexo tipoSexo){
        this.tipoSexo = tipoSexo;
    }

    public TipoPeso getTipoPeso(){
        return this.tipoPeso;
    }
    
    public void setTipoPeso(TipoPeso tipoPeso){
        this.tipoPeso = tipoPeso;
        calculoImc();
    }

    //#region METODOS

    public String registro(){
        return "\nNome: " + this.nome 
        + "\nPeso: " + this.peso 
        + "\nAltura: " + this.altura
        + "\nIdade: " + this.idade
        + "\nSexo: "; //+ this.tipoSexo;
    }

    public void calculoImc(){
        if(this.peso != null){
            if(this.altura != null){
                this. imc = this.peso/(Math.pow(this.altura, 2));            }
        }        
    }
    
    public Double getImc(){
        return this.imc;
        
    }

    public String getClassificacao(){
        if(this.imc<18.5){
         return TipoPeso.ABAIXOPESO.getClassificacao();
        }
        if(this.imc<24.9){
            return TipoPeso.OBESIDADE1.getClassificacao();
        }
        if(this.imc<34.9){
            return TipoPeso.OBESIDADE2.getClassificacao();
        }
        if(this.imc<39.9){
            return TipoPeso.OBESIDADE3.getClassificacao();
        }
        else{
            return TipoPeso.OBESIDADE3.getClassificacao();
        }

        
        
    /*public String printRegistro(){
        return registro() + "\nVocê está: " + getClassificacao();
        
    }
    public void printRegistro2(){
        System.out.println("\n");
        System.out.println(usuario1.registro());
        System.out.println("Você está: " + usuario1.getClassificacao());
    }*/
    }
    //#endregion


    
}
