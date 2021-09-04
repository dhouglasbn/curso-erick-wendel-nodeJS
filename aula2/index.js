/**
 * 0. Obter o usuário
 * 1. Preciso obet o número de telefone do meu usuário a partir de seu id
 * 2. Obter o endereço do usuário pelo id
 */

function getUser() {
    // Quando der ruim -> REJECT FUNCTION
    // Quando der success -> RESOLVE FUNCTION
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
        // return reject(new Error("DEU RUIM DE VERDADE!"))

        return resolve({
            id: 1,
            name: "Aladin",
            birthDate: new Date()
        })
    }, 1000)
    })

    
}

function getPhone(userId) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                number: "91199-0002",
                ddd: 83
            })
        }, 2000);
    })
}

function getAdress(userId, callback) {
    setTimeout(() => {
        return callback( null, {
            street: "Dos bobos",
            number: 0
        })
    }, 2000);
}

// Para manipular o sucesso usamos .then()

// Para manipular o erro usamos o .catch()

// Conceito de PIPE: user -> phone -> phone

const userPromise = getUser()

    // manipulando o resolve(success) passando esse resultado para chamar a Promise getPhone
    .then(function (user) {
        return getPhone(user.id)

            // o resultado de getPhone vai ser usado na resolve(success) de Phone
            .then(function resolvePhone(result) {
                // aqui eu vou retornar no primeiro then o result alterado para ser passado a frente
                return {
                    user: {
                        name: user.name,
                        id: user.id
                    },
                    phone: result
                }
            })
    })
    .then(function (result) {
        console.log("resultado", result)
    })
    .catch(function (error) {
        console.error("DEU RUIM", error)
    })

// callback() só vai retornar os dados da requisição após o tempo da execução

// getUser(function solveUser(error, user) {
//     // null || "" || 0 === false
//     if (error) {
//         console.error("DEU RUIM em USUARIO", error)
//         return;
//     }

//     getPhone(user.id, function solvePhone(error1, phone) {
//         if (error1) {
//             console.error("DEU RUIM em TELEFONE", error1)
//             return;            
//         }

//         getAdress(user.id, function solveAdress(error2, address) {
//             if (error2) {
//                 console.error("DEU RUIM em ENDERECO", error2)
//                 return;            
//             }

//             console.log(`
//             Nome: ${user.name}
//             Endereço: ${address.street}, ${address.number}
//             Telefone: (${phone.ddd}) ${phone.number}
//             `)
//         })
//     })
// })