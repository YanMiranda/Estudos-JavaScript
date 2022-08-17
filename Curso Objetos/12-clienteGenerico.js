function Cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor)
    {
        this.saldo += valor
    }
}

const yan = new Cliente("Yan","13371021645","yan@email.com",100)
console.log(yan)