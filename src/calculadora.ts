import { Calculo } from "./calculo.type.js";

export class Calculadora {

    historicoOperacoes : string[];

    constructor(){
        this.historicoOperacoes = [];
    }

    somar(calculo: Calculo){

        let resultado = calculo.num1 + calculo.num2;
        const operacao = `${calculo.num1} + ${calculo.num2} = ${resultado}`
        this.historicoOperacoes.push(operacao);

        return resultado;

    }

    subtrair(calculo : Calculo){

        let resultado = calculo.num1 - calculo.num2;
        const operacao = `${calculo.num1} - ${calculo.num2} = ${resultado}`
        this.historicoOperacoes.push(operacao);

        return resultado;

    }

    multiplicar(calculo : Calculo){

        let resultado = calculo.num1 * calculo.num2;
        const operacao = `${calculo.num1} * ${calculo.num2} = ${resultado}`
        this.historicoOperacoes.push(operacao);

        return resultado;

    }

    dividir(calculo : Calculo){

        let resultado = calculo.num1 / calculo.num2;
        const operacao = `${calculo.num1} / ${calculo.num2} = ${resultado}`
        this.historicoOperacoes.push(operacao);

        return resultado;

    }
}