package src.main.java.br.com.devs_gamers.imc.model.usuario;

public enum TipoPeso {
    ABAIXOPESO(0),
    PESONORMAL(1),
    SOBREPESO(2),
    OBESIDADE1(3),
    OBESIDADE2(4),
    OBESIDADE3(5);
    
    private Integer valor;
    private TipoPeso(Integer valor){
        this.valor = valor;
    }
    public Integer getValor(){
        return this.valor;
    }

    public String getImc() {
        String imc = null;
		switch (this.valor) {
		case 0:
			imc = "Abaixo de 18,5";
			break;
		case 1:
			imc = "18,5 - 24,9";
			break;
		case 2:
			imc = "25 - 29,9";
			break;
        case 3:
            imc = "30 - 34,9";
            break;
        case 4:
            imc = "35 - 39,9";
            break;
        case 5:
            imc = "Maior ou igual a 40";
            break;           

		default:
			break;
		}
		return imc;
	}

    public String getClassificacao() {
        String classificacao = null;
		switch (this.valor) {
		case 0:
		    classificacao = "Abaixo do Peso";
			
		case 1:
			classificacao = "Peso Normal";
			break;
		case 2:
			classificacao = "Sobrepeso";
			break;
        case 3:
            classificacao = "Obesidade Grau 1";
            break;
        case 4:
            classificacao = "Obesidade Grau 2";
            break;
        case 5:
            classificacao = "Obesidade Grau 3 ou Mórbida";
            break;           

		default:
			break;
		}
		return classificacao;

}
}
