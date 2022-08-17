console.log("\n Trabalhando com loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false
const destino = "Rio de Jaineiro"

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
listaDeDestinos.splice(1,1);//removendo item
}
else{
    if(estaAcompanhada == true){
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(2,1);//removendo item 
    }else{
    console.log("Não é maior de idade");
    }
}

let contador = 0;
while(contador < 3){
    console.log(listaDeDestinos[contador]);
}

console.log(listaDeDestinos);