const cliente = {
    nome: "Yan Felipe",
    sobrenome: "oliveira miranda",
    idade: 19,
    CPF: "13371021645",
    fones: ["(31)9 9658-2383", "(31)9 8867-1117"],
    dependentes: [
        {
            nome: "sara",
            parentesco: "filha",
            dataNasc: "15/03/2010"
        },
        {
            nome: "samia maria",
            parentesco: "filha",
            dataNasc: "20/01/2020"
        }
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

console.log(cliente.saldo);
cliente.depositar(30)
console.log(cliente.saldo);
