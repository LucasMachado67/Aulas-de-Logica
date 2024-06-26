"use strict";
//async function - faz apenas uma coisa por vez o que termina de carregar primeiro, aparece primeiro;
//sync function - faz mais de uma coisa em sincronia, o que começa a ser carregado primeiro, aparece primeiro;
//Threads  
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
//USAR O AXIOS:
const axios_1 = __importDefault(require("axios"));
//pega todos os super herois
function getHeroi() {
    return __awaiter(this, void 0, void 0, function* () {
        let herois = yield axios_1.default.get(`http://localhost:3000/superHeroi/`);
        return herois.data;
    });
}
;
//pega somente um super heroi pelo seu id
function getHeroiByID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let superHeroi = yield axios_1.default.get(`http://localhost:3000/superHeroi/${id}`);
        return superHeroi.data;
    });
}
function mostrarHeroi(id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yield getHeroiByID(id));
    });
}
;
mostrarHeroi(2);
let novoSuperHeroi = {
    id: 5,
    nome: "C#çador",
    poderes: "Caçar erros e apontar e te julgar e.e",
    escalaPoder: "cidade"
};
function addSuperHeroi(superHeroi) {
    axios_1.default.post("http://localhost:3000/superHeroi", superHeroi)
        .then(data => {
        console.log("Super Heroí adicionado com sucesso!!!");
    });
}
;
addSuperHeroi(novoSuperHeroi);
