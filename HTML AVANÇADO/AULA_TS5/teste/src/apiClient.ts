import axios from "axios";
import {v4 as uuidv4} from 'uuid'
import { Produto, Usuario, Costomer } from "./objetos";


export const addCostomer = async(costomer:Costomer):Promise<String> =>{
    costomer.id = uuidv4()
    return "Cliente adicionado com sucesso"
}
//Produtos
export const getProdutos = async () : Promise<Produto[]> =>{
    let produtos = await axios.get("https://fakestoreapi.com/products")
    return produtos.data
};
export async function getProdutosById(id:number) : Promise<Produto> {
    let produto = await axios.get(`https://localhost:3000/produto/${id}`);
    return produto.data;
};

export async function addProduto(produto:Produto) :Promise<string> {
    await axios.post("http://localhost:3000/produto/",produto);
    return `Produto: ${produto.title} cadastrado com sucesso!`
}

// Usuarios
export const getUsuarios = async () : Promise<Usuario> =>{
    let usuarios = await axios.get("https://fakestoreapi.com/users");
    return usuarios.data;
};
export async function getUsuariosById(id:number) : Promise<Usuario> {
    let usuario = await axios.get(`https://fakestoreapi.com/users/${id}`);
    return usuario.data;
}