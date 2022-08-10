import { Calculadora } from "./calculadora.js";
import { Calculo } from "./calculo.type.js";


const valor1 = document.getElementById("valor1") as HTMLInputElement;
const valor2 = document.getElementById("valor2") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

const adicao = document.getElementById("btnAdd") as HTMLButtonElement;
const subtracao = document.getElementById("btnSub") as HTMLButtonElement;
const multiplicacao = document.getElementById("btnMul") as HTMLButtonElement;
const divisao = document.getElementById("btnDiv") as HTMLButtonElement;

const divHistorico = document.getElementById("historico") as HTMLDivElement;

const calculadora = new Calculadora();

function somar(){
    
    const calculo : Calculo ={
        num1 : Number(valor1.value),
        num2 : Number(valor2.value)
    }

    let soma : number = 0;

    soma = calculadora.somar(calculo)

    resultado.textContent = soma.toString();

    if(calculadora.historicoOperacoes.length === 0){
        divHistorico.style.display = "none";

    }else{
        while(divHistorico.firstChild){
            divHistorico.removeChild(divHistorico.firstChild);

        }

        divHistorico.classList.remove("d-none");
        calculadora.historicoOperacoes.forEach((operacao : string) =>{
            const txtOperacao = document.createElement("h3") as HTMLHeadingElement;

            txtOperacao.className = "alert alert-primary";
            txtOperacao.innerText = operacao;

            divHistorico.appendChild(txtOperacao);

        })
    }

}

function subtrair(){
    
    const calculo : Calculo ={
        num1 : Number(valor1.value),
        num2 : Number(valor2.value)
    }

    let subtracao : number = 0;

    subtracao = calculadora.subtrair(calculo);

    resultado.textContent = subtracao.toString();

    if(calculadora.historicoOperacoes.length === 0){
        divHistorico.style.display = "none";

    }else{
        while(divHistorico.firstChild){
            divHistorico.removeChild(divHistorico.firstChild);

        }

        divHistorico.classList.remove("d-none");
        calculadora.historicoOperacoes.forEach((operacao : string) =>{
            const txtOperacao = document.createElement("h3") as HTMLHeadingElement;

            txtOperacao.className = "alert alert-primary";
            txtOperacao.innerText = operacao;

            divHistorico.appendChild(txtOperacao);

        })
    }

}

function multiplicar(){
    
    const calculo : Calculo ={
        num1 : Number(valor1.value),
        num2 : Number(valor2.value)
    }

    let multiplicacao : number = 0;

    multiplicacao = calculadora.multiplicar(calculo);

    resultado.textContent = multiplicacao.toString();

    if(calculadora.historicoOperacoes.length === 0){
        divHistorico.style.display = "none";

    }else{
        while(divHistorico.firstChild){
            divHistorico.removeChild(divHistorico.firstChild);

        }

        divHistorico.classList.remove("d-none");
        calculadora.historicoOperacoes.forEach((operacao : string) =>{
            const txtOperacao = document.createElement("h3") as HTMLHeadingElement;

            txtOperacao.className = "alert alert-primary";
            txtOperacao.innerText = operacao;

            divHistorico.appendChild(txtOperacao);

        })
    }

}

function dividir(){
    
    const calculo : Calculo ={
        num1 : Number(valor1.value),
        num2 : Number(valor2.value)
    }

    let divisao : number = 0;

    if(calculo.num2 == 0){
        resultado.textContent = "  Impossivel dividir por 0!";
        return;
    }
        
    divisao = calculadora.dividir(calculo)

    resultado.textContent = divisao.toString();

    if(calculadora.historicoOperacoes.length === 0){
        divHistorico.style.display = "none";

    }else{
        while(divHistorico.firstChild){
            divHistorico.removeChild(divHistorico.firstChild);

        }

        divHistorico.classList.remove("d-none");
        calculadora.historicoOperacoes.forEach((operacao : string) =>{
            const txtOperacao = document.createElement("h3") as HTMLHeadingElement;

            txtOperacao.className = "alert alert-primary";
            txtOperacao.innerText = operacao;

            divHistorico.appendChild(txtOperacao);

        })
    }

}

adicao.addEventListener("click", somar)
subtracao.addEventListener("click", subtrair)
multiplicacao.addEventListener("click", multiplicar)
divisao.addEventListener("click", dividir)

