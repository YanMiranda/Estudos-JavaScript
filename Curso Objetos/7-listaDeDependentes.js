const cliente = {
    nome: "Yan Felipe",
    sobrenome: "oliveira miranda",
    idade: 19,
    CPF: "13371021645",
    fones: ["(31)9 9658-2383","(31)9 8867-1117"],
    dependentes :[{
        nome:"sara",
        parentesco:"filha",
        dataNasc:"15/03/2010"
    }]
}

cliente.dependentes.push({
    nome:"samia maria",
    parentesco:"filha",
    dataNasc:"20/01/2020"
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="20/01/2020")

console.log(filhaMaisNova[0]);
console.log(filhaMaisNova[0].nome);