/**
 * 0. Obter o usuário
 * 1. Preciso obet o número de telefone do meu usuário a partir de seu id
 * 2. Obter o endereço do usuário pelo id
 */

function getUser() {
    setTimeout(() => {
        return {
            id: 1,
            name: "Aladin",
            birthDate: new Date()
        }
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

const user = getUser()
const phoneNumber = getPhone(user.id)

console.log(`User: ${user.name}`)
console.log(`Phone number: ${phoneNumber.number}`)