package main.br.com.devsgames.irrf.models.funcionario;


public class Funcionario {
    //#region Atributos
    private String nome; 
    private String cargo;
    private Double salarioBruto;
    private Integer dependentes;
    private Double salarioLiquido;

    //#endregion
    
    //#region Construtor
    public Funcionario(){}
    //#endregion

    //#region Gets e Sets
    public String getNome() {
        return this.nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getSalarioBruto() {
        return this.salarioBruto;
    }

    public void setSalarioBruto(Double salarioBruto) {
        this.salarioBruto = salarioBruto;
    }

    public Integer getDependentes() {
        return this.dependentes;
    }
    public void setDependentes(Integer dependentes) {
        this.dependentes = dependentes;
    }

    public String getCargo(){
        return this.cargo;
    }

    public void setCargo(String cargo){
        this.cargo = cargo;
    }

    public Double getSalarioLiquido(){
        return salarioLiquido;
    }

    public void setSalarioLiquido(Double salarioLiquido){
        this.salarioLiquido = salarioLiquido;
    }
    //#endregion
    
}
