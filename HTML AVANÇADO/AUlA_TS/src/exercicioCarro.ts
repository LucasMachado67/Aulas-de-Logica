interface Carro {
    marca: string;
    anoLancamento: number;
    cor: string;
    arCondicionado?: string;
    aerofolio?: string;
}

let carro1: Carro = {
    marca: "BMW",
    anoLancamento: 2023,
    cor: "Branco",
    aerofolio: "GT grande"
}

function MostrarCarro(carro1:Carro){
    console.log(`Marca: ${carro1.marca}`);
    console.log(`Ano de lançamento: ${carro1.anoLancamento}`);
    console.log(`Cor: ${carro1.cor}`);
    console.log(`Ar Condicionado: ${carro1.arCondicionado ? carro1.arCondicionado : "Não Possuí"}`);
    console.log(`Aerofólio: ${carro1.aerofolio ? carro1.aerofolio : "Não Possuí"}`);
}

MostrarCarro(carro1);
