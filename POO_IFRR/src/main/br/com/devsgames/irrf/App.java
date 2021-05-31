package main.br.com.devsgames.irrf;

//#region Import
import java.text.DecimalFormat;
import java.util.Scanner;

import main.br.com.devsgames.irrf.models.funcionario.Funcionario;
import main.br.com.devsgames.irrf.models.util.Util;
//#endregion


public class App {
    public static void main(String[] args) {
        
        //#region Scanner  
        var scanner = new Scanner(System.in);

        var funcionario = new Funcionario();

        System.out.print("Digite seu nome: ");
        funcionario.setNome(scanner.nextLine());

        System.out.print("Qual o seu cargo? ");
        funcionario.setCargo(scanner.nextLine());

        System.out.print("Salário bruto: ");
        funcionario.setSalarioBruto(scanner.nextDouble());

        System.out.print("Quantos dependentes? ");
        funcionario.setDependentes(scanner.nextInt());
        //#endregion


        var mensagem = String.format("\nNome: %s \nCargo: %s \nSalário Bruto: R$ %s", funcionario.getNome(), funcionario.getCargo(), funcionario.getSalarioBruto());

        //#region System
        System.out.println(mensagem);
        System.out.println();
        System.out.println();

        System.out.println("INSS: R$ " + new DecimalFormat("#,##0.00").format(Util.inss(funcionario.getSalarioBruto())));

        System.out.println("IRRF: R$ " + new DecimalFormat("#,##0.00").format(Util.irrf(funcionario.getSalarioBruto(), funcionario.getDependentes())));

        System.out.println("Salário Líquido: R$ " + new DecimalFormat("#,##0.00").format(Util.salarioLiquido(Util.salarioDescontado(funcionario.getSalarioBruto()), Util.irrf(funcionario.getSalarioBruto(), funcionario.getDependentes()))));

        //#endregion

        scanner.close();
    }
}