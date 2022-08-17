const cliente = 
{
    nome: "Yan Felipe",
    sobrenome: "oliveira miranda",
    idade: 19,
    CPF: "13371021645",
    fones: ["(31)9 9658-2383", "(31)9 8867-1117"],
    dependentes: 
    [
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


function oferecerSeguro(obj)
{
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
//console.log(Object.values(cliente)) ver valores do obj
//console.log(Object.entries(cliente)) ver kyes e values
oferecerSeguro(cliente)