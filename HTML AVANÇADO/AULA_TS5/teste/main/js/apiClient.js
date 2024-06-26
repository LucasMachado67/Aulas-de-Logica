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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarios = exports.getProdutos = void 0;
exports.getProdutosById = getProdutosById;
exports.addProduto = addProduto;
exports.getUsuariosById = getUsuariosById;
const axios_1 = __importDefault(require("axios"));
//Produtos
const getProdutos = () => __awaiter(void 0, void 0, void 0, function* () {
    let produtos = yield axios_1.default.get("https://fakestoreapi.com/products");
    return produtos.data;
});
exports.getProdutos = getProdutos;
function getProdutosById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let produto = yield axios_1.default.get(`https://localhost:3000/produto/${id}`);
        return produto.data;
    });
}
;
function addProduto(produto) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.post("http://localhost:3000/produto/", produto);
        return `Produto: ${produto.title} cadastrado com sucesso!`;
    });
}
// Usuarios
const getUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    let usuarios = yield axios_1.default.get("https://fakestoreapi.com/users");
    return usuarios.data;
});
exports.getUsuarios = getUsuarios;
function getUsuariosById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let usuario = yield axios_1.default.get(`https://fakestoreapi.com/users/${id}`);
        return usuario.data;
    });
}
