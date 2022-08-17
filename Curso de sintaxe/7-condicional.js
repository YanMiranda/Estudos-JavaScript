console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis");
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

console.log(listaDeDestinos);

