console.log("Compondo objetos");

const cliente = {
    nome: "Yan Felipe",
    sobrenome: "oliveira miranda",
    idade: 19,
    CPF: "13371021645",
    fones: ["(31)9 9658-2383","(31)9 8867-1117"]
}

cliente.dependentes ={
    nome:"sara",
    parentesco:"filha",
    dataNasc:"15/03/2010"
}

console.log(cliente);

cliente.dependentes.nome = "sara silva"
console.log(cliente);