package src.main.java.br.com.devs_gamers.imc.model.usuario;

public enum TipoSexo {

    MASCULINO(0),
    FEMININO(1);
    
    private Integer valor;
    private TipoSexo(Integer valor){
        this.valor = valor;
    }
    public Integer getValor(){
        return this.valor;
    }

    public String getGenero() {
        String genero = null;
		switch (this.valor) {
		case 0:
		    genero = "♂️";
            break;
			
		case 1:
			genero = "♀️";
			break;
        }
        return genero;
    }

    public String setEnum(Integer valorScan) {
		String tf = null;
		switch (valorScan) {
		case 0:
			tf = TipoSexo.MASCULINO.getGenero();
			break;
		case 1:
			tf = TipoSexo.FEMININO.getGenero();
			break;

		default:
			break;
		}
		return tf;
	}
	
    
}
