console.log("Acessando uma lista");

const cliente = {
    nome: "Yan Felipe",
    sobrenome: "Oliveira Miranda",
    idade: 19,
    CPF: "13371021645"
}

const chaves = ["nome","sobrenome","idade","CPF"]

//console.log(cliente[chaves[0]])

chaves.forEach(teste => console.log(cliente[teste]))//DARÁ UNDEFINED CASO A CHAVE ESTEJÁ ERRADA