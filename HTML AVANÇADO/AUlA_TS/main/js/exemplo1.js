"use strict";
// Type Union
let cpf;
let aluno = {
    nome: "Pedro",
    idade: 12
};
let prof = {
    nome: "Orácio Covarde",
    idade: 87,
    disciplina: "História"
};
function mostrarProfessor(professor) {
    console.log(`Nome: ${professor.nome}`);
    console.log(`Idade: ${professor.idade}`);
    console.log(`Disciplina: ${professor.disciplina ? professor.disciplina : "Não possuí"}`);
}
mostrarProfessor(prof);
