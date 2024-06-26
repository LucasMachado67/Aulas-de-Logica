
// Exercício 1
// let num1: number = 24
// let num2: number = 10

// function calcular(){

//     let resultado: number = num1 + num2;
//     console.log(resultado);
// }

// calcular();


//Exercício 2
// let strNum: string | number = 10

// function strOrNum(srtNum: string | number){
//     if(typeof srtNum == "number"){
//         srtNum = srtNum * 2 as number;
//         console.log("Este parâmetro é um número " + srtNum);
//     }
        
//     else
//         console.log("Este parâmetro é uma string - texto");
// }

// strOrNum(strNum);

//Exercício 4

// let frutas:string[] = ["Banana", "Maça", "Maracujá", "Goiaba"]

// function imprimirFrutas(){
//     frutas.forEach(fruta => {
//         console.log(fruta);
//     });
// }

// imprimirFrutas();

// Exercício 6

// interface Veiculos{
//     nome: string,
//     ano: number
// }

// let veiculo: Veiculos = {
//     nome: "X6",
//     ano: 2023
// }
// let nome:string = veiculo.nome;
// let ano:number = veiculo.ano;
// console.log(veiculo)
// function atualizarAnoVeiculos(ano:number, nome:string){
//     nome;
//     ano = 2024;
//     console.log(nome);
//     console.log("O ano agora é: " + ano);
// }

// atualizarAnoVeiculos(ano, nome);

//Exercício 7

// interface Usuario{
//     user: string,
//     senha: string
// };


// let login: Usuario = {
//     user: "Lucas",
//     senha: "tyuri231"
// }
// function verificarUsuario(repetirSenha:string | boolean){

//     if(login.senha == repetirSenha){
//       return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(verificarUsuario("awdawd"));

//Exercício Criado

// interface Animal {
//     animal: string,
//     especie: string
// }
// let animal: Animal = {
//     animal: "Animal: gato",
//     especie: "Espécie: Equus ferus"
// }
// console.log(animal.animal, animal.especie);
// function mudarEspecie(altEspecie: string){
//     return animal.especie = altEspecie;
// }   
// console.log(mudarEspecie("O nome da espécie agora é: Felis catus"));

//Exercício Média

// function calcular(num1: number, num2:number, num3:number){
//     let resultado = (num1 + num2 + num3) / 3;
//    return resultado;
// }
// console.log("A média é de: " + calcular(10 , 10, 8));

function calcular(raio:number){
    let area = 3.14 * raio * raio;
    return area; 
}
console.log("A área é de: " + calcular(9));