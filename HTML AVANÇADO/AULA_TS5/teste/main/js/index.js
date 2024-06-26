"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiClient_1 = require("./apiClient");
const apiClient_2 = require("./apiClient");
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
let novoProduto = {
    id: "1",
    title: "Gaite de fole da invisibilidade",
    price: 178.90,
    description: "Enquanto você tocar ela você fica invisivel",
    category: "Objetos Mágicos",
    image: "https://google.com/image.jpg",
    rating: {
        rate: 5,
        count: 1
    }
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let produtos = yield (0, apiClient_1.getProdutos)();
        // produtos.forEach(produto => {
        //     carregarListaProdutos(produto);
        // })
        // let produto = await getProdutosById(5);
        let usuarios = yield (0, apiClient_1.getUsuarios)();
        let usuario = yield (0, apiClient_1.getUsuariosById)(3);
        console.log(yield (0, apiClient_2.addProduto)(novoProduto));
    });
}
main();
