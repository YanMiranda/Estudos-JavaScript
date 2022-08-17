
class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, cpf, email, saldo,saldoPoupanca){
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const yan = new ClientePoupanca("Yan","y@email.com","13371021645",100,200)
console.log(yan)

yan.depositar(50)
yan.depositarPoupanca(50)

console.log(yan)