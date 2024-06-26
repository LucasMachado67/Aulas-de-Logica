"use strict";
let nome;
let botao = document.querySelector(".btn");
let resultado;
let tagp = document.getElementById("Resultado");
function pedirNome() {
    nome = prompt("Digite seu nome");
    alert("Bem vindo " + nome);
}
botao.addEventListener("click", pedirNome);
function somar() {
    let input1 = document.querySelector("#num1");
    let input2 = document.querySelector("#num2");
    let n1 = Number(input1.value);
    let n2 = Number(input2.value);
    let p = document.querySelector("#Resultado");
    p.innerText = `Resultado: ${n1 + n2}`;
}
let Somar = document.querySelector(".somar");
Somar.addEventListener('click', somar);
