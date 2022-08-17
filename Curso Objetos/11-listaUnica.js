const clientes =
    [{
        nome: "Yan Felipe ",
        CPF: "13371021645",
        dependentes:
            [{
                nome: "sara",
                parentesco: "filha",
                dataNasc: "15/03/2010"
            }],
    },
    {
        nome: "João Pedro",
        CPF: `12345678912`,
        dependentes:
            [{
                nome: "samia maria",
                parentesco: "filha",
                dataNasc: "20/01/2020"
            }],
    }]

    for(let i=0;i<clientes.length;i++ )
    {
        const listaDependentes = [...clientes[i].dependentes]
        console.log(listaDependentes)

    }
//const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

