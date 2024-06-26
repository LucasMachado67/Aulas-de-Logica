
let idade: number | string = 1;

console.log(typeof idade);

if(typeof idade == "number")
    console.log("é um número");
else{
    //console.log("não é um número");
}
interface Livro{
    titulo:string,
    genero?: string
}
let l1:  Livro = {
    titulo: "Senhor dos aneis"
}

//console.log(typeof l1.titulo);

interface Autor{
    nome:string,
    isVivo:boolean
}

interface Serie{
    titulo:string,
    qtdEpisodios: number,
    autor: Autor
}

let novaSerie: Serie = {
    titulo: "Breaking Bad",
    qtdEpisodios: 100,
    autor:{
        nome:"Vince Gilligan",
        isVivo: true
    }
};
console.log(typeof novaSerie.autor.nome);