"use strict";
let idade = 1;
console.log(typeof idade);
if (typeof idade == "number")
    console.log("é um número");
else {
    //console.log("não é um número");
}
let l1 = {
    titulo: "Senhor dos aneis"
};
let novaSerie = {
    titulo: "Breaking Bad",
    qtdEpisodios: 100,
    autor: {
        nome: "Vince Gilligan",
        isVivo: true
    }
};
console.log(typeof novaSerie.autor.nome);
