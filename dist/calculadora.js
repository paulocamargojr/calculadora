export class Calculadora {
    constructor() {
        this.historicoOperacoes = [];
    }
    somar(calculo) {
        let resultado = calculo.num1 + calculo.num2;
        const operacao = `${calculo.num1} + ${calculo.num2} = ${resultado}`;
        this.historicoOperacoes.push(operacao);
        return resultado;
    }
    subtrair(calculo) {
        let resultado = calculo.num1 - calculo.num2;
        const operacao = `${calculo.num1} - ${calculo.num2} = ${resultado}`;
        this.historicoOperacoes.push(operacao);
        return resultado;
    }
    multiplicar(calculo) {
        let resultado = calculo.num1 * calculo.num2;
        const operacao = `${calculo.num1} * ${calculo.num2} = ${resultado}`;
        this.historicoOperacoes.push(operacao);
        return resultado;
    }
    dividir(calculo) {
        let resultado = calculo.num1 / calculo.num2;
        const operacao = `${calculo.num1} / ${calculo.num2} = ${resultado}`;
        this.historicoOperacoes.push(operacao);
        return resultado;
    }
}
