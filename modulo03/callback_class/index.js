/**
 * 0. Obter o usuário
 * 1. Preciso obet o número de telefone do meu usuário a partir de seu id
 * 2. Obter o endereço do usuário pelo id
 */

 function getUser(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: "Aladin",
            birthDate: new Date()
        })
    }, 1000)
}

function getPhone(userId, callback) {
    setTimeout(() => {
        return callback(null, {
            number: "91199-0002",
            ddd: 83
        })
    }, 2000);
}

function getAdress(userId, callback) {
    setTimeout(() => {
        return callback( null, {
            street: "Dos bobos",
            number: 0
        })
    }, 2000);
}

// callback() só vai retornar os dados da requisição após o tempo da execução

getUser(function solveUser(error, user) {
    // null || "" || 0 === false
    if (error) {
        console.error("DEU RUIM em USUARIO", error)
        return;
    }

    getPhone(user.id, function solvePhone(error1, phone) {
        if (error1) {
            console.error("DEU RUIM em TELEFONE", error1)
            return;            
        }

        getAdress(user.id, function solveAdress(error2, address) {
            if (error2) {
                console.error("DEU RUIM em ENDERECO", error2)
                return;            
            }

            console.log(`
            Nome: ${user.name}
            Endereço: ${address.street}, ${address.number}
            Telefone: (${phone.ddd}) ${phone.number}
            `)
        })
    })
})
// const phoneNumber = getPhone(user.id)


// console.log(`Phone number: ${phoneNumber.number}`)