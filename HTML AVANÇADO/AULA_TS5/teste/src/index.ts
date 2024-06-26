import { Produto, Usuario } from "./objetos";
import { getProdutos,getProdutosById, getUsuarios, getUsuariosById} from "./apiClient";
import { addProduto } from "./apiClient";


// let novoProduto: Produto = {
//     id: "1",
//     title: "Gaita de fole da invisibilidade",
//     price: 178.90
// };

// function carregarListaProdutos(produto:Produto){
//     let listaProdutos = document.querySelector(".lista-produtos") as HTMLUListElement;
//     const card = document.createElement(`<li>
//     <div class="card">
//         <img src="${produto.image}" alt="">
//         <div class="dados">
//             <h2 class="title">${produto.title}</h2>
//             <h3 class="price">${produto.price}</h3>
//         </div>
//         <p class="description">${produto.description}</p>
//     </div>
// </li>`)
// listaProdutos.appendChild(card);
// }
let novoProduto:Produto = {
    id: "1",
    title: "Gaite de fole da invisibilidade",
    price: 178.90,
    description: "Enquanto você tocar ela você fica invisivel",
    category: "Objetos Mágicos",
    image:"https://google.com/image.jpg",
    rating:{
        rate: 5,
        count: 1
    }
}

async function main(){
    let produtos:Produto[] = await getProdutos();
    // produtos.forEach(produto => {
    //     carregarListaProdutos(produto);
    // })
    // let produto = await getProdutosById(5);
    let usuarios = await getUsuarios();
    let usuario = await getUsuariosById(3);


    console.log(await addProduto(novoProduto));
}

main();




