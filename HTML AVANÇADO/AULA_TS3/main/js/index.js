"use strict";
//https://jsonplaceholder.typicode.com/users
//Se não atribuirmos um método, ele irá ser get por padrão;
// function buscarCep(cep){
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(res => res.json())
//     .then(dados => {
//         document.querySelector(".rua").innerHTML = dados.logradouro;
//     })
// }

// document.querySelector(".buscar").addEventListener("click",() => {
//     let cepInput = document.querySelector(".cep").value;
//     buscarCep(cepInput);
// });


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(dados => {
//         dados.forEach(user => {
//             console.log(user.name)
//         });// ve todos os nomes dos usuários;
//         console.log(dados[0].name); // Da o retorno do nome naposição 0;
//     });


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(dado => {
//         console.log(dado);
//     })


//Exercicio 1
// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(dados => {
//     console.log(dados);
// })


//Exercicio 2
// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(dados => {
//     document.querySelector(".pro").innerHTML = dados[1].title;
// })

//Desafio

// let input = document.querySelector(".input");
// function mostrarDado(){
//     fetch(`https://fakestoreapi.com/products/${input.value}`)
//     .then(res => res.json())
//     .then(dados => {
//         //alert(dados[input.value].title+" , " + dados[input.value].price);
//         alert(dados.title + " , " + dados.price);
//     }); 
// }

// document.querySelector(".buscar").addEventListener("click", () => {
//     mostrarDado();
// })

document.querySelector(".buscar").addEventListener("click", () => {
    fetch("https://fakestoreapi.com/users/4")
    .then(res => res.json())
    .then(dados => [
        document.querySelector(".nome").innerHTML = dados.name.firstname + dados.name.lastname,
        document.querySelector(".email").innerHTML = dados.email,
        document.querySelector(".telefone").innerHTML = dados.phone,
        document.querySelector(".cidade").innerHTML = dados.address.city,
    ])
});