console.log("Acessando telefones");

const cliente = {
    nome: "Yan Felipe",
    sobrenome: "oliveira miranda",
    idade: 19,
    CPF: "13371021645",
    fones: ["(31)9 9658-2383","(31)9 8867-1117"]
}

cliente.fones.forEach(fone => console.log(fone))