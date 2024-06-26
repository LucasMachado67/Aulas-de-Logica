let nome: string | null;
let botao: HTMLButtonElement = document.querySelector(".btn") as HTMLButtonElement;


let resultado: number | null | string;
let tagp: HTMLParagraphElement = document.getElementById("Resultado") as HTMLParagraphElement;

function pedirNome(){
    nome = prompt("Digite seu nome") as string;
    alert ("Bem vindo " + nome);
}


botao.addEventListener("click", pedirNome);

function somar(){
    let input1:HTMLInputElement = document.querySelector("#num1") as HTMLInputElement;
    let input2:HTMLInputElement = document.querySelector("#num2") as HTMLInputElement;
    let n1:number = Number(input1.value)
    let n2:number = Number(input2.value)
    
    let p: HTMLParagraphElement = document.querySelector("#Resultado") as HTMLParagraphElement;

    p.innerText = `Resultado: ${n1+n2}`;
    
}

let Somar: HTMLButtonElement = document.querySelector(".somar") as HTMLButtonElement
Somar.addEventListener('click', somar);


