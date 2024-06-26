"use strict";
function cadastrarLivro() {
    let livro = {
        titulo: prompt("Título: "),
        genero: prompt("Gênero: "),
        autor: prompt("Autor: ") //Não precisa botar o "as string" porque já foi declarado | null
    };
    return livro;
}
let livros = [];
let menu = prompt("1- Novo Livro 2-Ver Livros 3-Sair");
while (menu != "3") {
    if (menu == "3") {
        livros.push(cadastrarLivro());
    }
    else if (menu == "2") {
        livros.forEach(livro => {
            console.log(livro.titulo);
        });
    }
    else if (menu == "3") {
        break;
    }
}
