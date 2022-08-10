import { Calculadora } from "./calculadora.js";
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const resultado = document.getElementById("resultado");
const adicao = document.getElementById("btnAdd");
const subtracao = document.getElementById("btnSub");
const multiplicacao = document.getElementById("btnMul");
const divisao = document.getElementById("btnDiv");
const divHistorico = document.getElementById("historico");
const calculadora = new Calculadora();
function somar() {
    const calculo = {
        num1: Number(valor1.value),
        num2: Number(valor2.value)
    };
    let soma = 0;
    soma = calculadora.somar(calculo);
    resultado.textContent = soma.toString();
    if (calculadora.historicoOperacoes.length === 0) {
        divHistorico.style.display = "none";
    }
    else {
        while (divHistorico.firstChild) {
            divHistorico.removeChild(divHistorico.firstChild);
        }
        divHistorico.classList.remove("d-none");
        calculadora.historicoOperacoes.forEach((operacao) => {
            const txtOperacao = document.createElement("h3");
            txtOperacao.className = "alert alert-primary";
            txtOperacao.innerText = operacao;
            divHistorico.appendChild(txtOperacao);
        });
    }
}
function subtrair() {
    const calculo = {
        num1: Number(valor1.value),
        num2: Number(valor2.value)
    };
    let subtracao = 0;
    subtracao = calculadora.subtrair(calculo);
    resultado.textContent = subtracao.toString();
    if (calculadora.historicoOperacoes.length === 0) {
        divHistorico.style.display = "none";
    }
    else {
        while (divHistorico.firstChild) {
            divHistorico.removeChild(divHistorico.firstChild);
        }
        divHistorico.classList.remove("d-none");
        calculadora.historicoOperacoes.forEach((operacao) => {
            const txtOperacao = document.createElement("h3");
            txtOperacao.className = "alert alert-primary";
            txtOperacao.innerText = operacao;
            divHistorico.appendChild(txtOperacao);
        });
    }
}
function multiplicar() {
    const calculo = {
        num1: Number(valor1.value),
        num2: Number(valor2.value)
    };
    let multiplicacao = 0;
    multiplicacao = calculadora.multiplicar(calculo);
    resultado.textContent = multiplicacao.toString();
    if (calculadora.historicoOperacoes.length === 0) {
        divHistorico.style.display = "none";
    }
    else {
        while (divHistorico.firstChild) {
            divHistorico.removeChild(divHistorico.firstChild);
        }
        divHistorico.classList.remove("d-none");
        calculadora.historicoOperacoes.forEach((operacao) => {
            const txtOperacao = document.createElement("h3");
            txtOperacao.className = "alert alert-primary";
            txtOperacao.innerText = operacao;
            divHistorico.appendChild(txtOperacao);
        });
    }
}
function dividir() {
    const calculo = {
        num1: Number(valor1.value),
        num2: Number(valor2.value)
    };
    let divisao = 0;
    if (calculo.num2 == 0) {
        resultado.textContent = "  Impossivel dividir por 0!";
        return;
    }
    divisao = calculadora.dividir(calculo);
    resultado.textContent = divisao.toString();
    if (calculadora.historicoOperacoes.length === 0) {
        divHistorico.style.display = "none";
    }
    else {
        while (divHistorico.firstChild) {
            divHistorico.removeChild(divHistorico.firstChild);
        }
        divHistorico.classList.remove("d-none");
        calculadora.historicoOperacoes.forEach((operacao) => {
            const txtOperacao = document.createElement("h3");
            txtOperacao.className = "alert alert-primary";
            txtOperacao.innerText = operacao;
            divHistorico.appendChild(txtOperacao);
        });
    }
}
adicao.addEventListener("click", somar);
subtracao.addEventListener("click", subtrair);
multiplicacao.addEventListener("click", multiplicar);
divisao.addEventListener("click", dividir);
