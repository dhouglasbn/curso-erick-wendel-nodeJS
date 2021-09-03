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

function getPhone(userId) {
    setTimeout(() => {
        return {
            number: "1199002",
            ddd: 83
        }
    }, 2000);
}

function getAdress(userID) {

}

// callback() só vai retornar os dados da requisição após o tempo da execução

getUser(function solveUser(error, user) {
    if (error) {
        console.error("DEU RUIM em USUARIO", error)
        return;
    }
})
// const phoneNumber = getPhone(user.id)


// console.log(`Phone number: ${phoneNumber.number}`)