//async function - faz apenas uma coisa por vez o que termina de carregar primeiro, aparece primeiro;
//sync function - faz mais de uma coisa em sincronia, o que começa a ser carregado primeiro, aparece primeiro;
//Threads  

//USAR O AXIOS:
import axios from 'axios';

//let produtos

//async function buscarProdutos(){
//    produtos = await axios.get('https://fakestoreapi.com/products/1')
//    console.log(produtos.data.title + produtos.data.price);
//};

//buscarProdutos();

// axios.get('https://fakestoreapi.com/products/2')
// .then(res => console.log(res.data));

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then(res => console.log(res.data.name));


// interface Post {
//     userId: string,
//     id: number,
//     title:string,
//     body: string
// }


// let posts: Post[] = []

// axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
// .then(itens => {
//     posts = itens.data
// });
// console.log(posts);

// interface User{
//     id: number,
//     name: string,
//     email: string
// };

// const getUsuarios = async () :Promise<User[]> => {
//     let usuarios = await axios.get("http://localhost:3000/user");
//     return usuarios.data;
// };

// async function pegarUser():Promise<User[]>{
//     let usuarios = await axios.get("");
//     return usuarios.data;
// };

// const mostrarUser = async () => {
//     let usuarios:User[] = await getUsuarios();
//     console.log(usuarios);
// };

// mostrarUser();

// interface Animal{
//     id: number,
//     nome: string,
//     especie: string
// }

// async function getAnimais(): Promise<Animal[]>{
//     let animais = await axios.get("http://localhost:3000/animal")
//     return animais.data;
// }

// async function mostrarAnimais(){
//     console.log(await getAnimais());
// }

// mostrarAnimais();

interface Heroi {
    id: number,
    nome: string,
    poderes: string,
    escalaPoder: string
}
//pega todos os super herois
async function getHeroi(): Promise<Heroi[]>{
    let herois = await axios.get(`http://localhost:3000/superHeroi/`);
    return herois.data;
};
//pega somente um super heroi pelo seu id
async function getHeroiByID(id:number): Promise<Heroi>{
    let superHeroi = await axios.get(`http://localhost:3000/superHeroi/${id}`)
    return superHeroi.data;
}
async function mostrarHeroi(id:number){
    console.log(await getHeroiByID(id));
};

mostrarHeroi(2);

let novoSuperHeroi:Heroi  ={
    id: 5,
    nome: "C#çador",
    poderes: "Caçar erros e apontar e te julgar e.e",
    escalaPoder: "cidade"
}

function addSuperHeroi(superHeroi:Heroi){
    axios.post("http://localhost:3000/superHeroi", superHeroi)
    .then(data => {
        console.log("Super Heroí adicionado com sucesso!!!");
    });
};

addSuperHeroi(novoSuperHeroi)



