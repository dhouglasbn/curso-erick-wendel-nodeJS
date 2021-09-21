const first_database = [
    {
        id: 0,
        name: "dhouglas",
        username: "dhouglasbn",
        password: "dhouglas22"
    },
    {
        id: 1,
        name: " dhiego",
        username: "dhiegocdbc",
        password: "dhiego22"
    },
    {
        id: 2,
        name: "diego",
        username: "diegosf",
        password: "dlicinha"
    },
    {
        id: 3,
        name: "filipe",
        username: "filipedeschamps",
        password: "dlicinha"
    },
    {
        id: 4,
        name: "erick",
        username: "wendelerick",
        password: "mvpmicrosoft"
    },
    
]

const second_database = [
    {
        id: 0,
        clothes: {
            shirt: "preta",
            pants: "marrom",
            shoes: "preto"
        }
    },
    {
        id: 1,
        clothes: {
            shirt: "branca",
            pants: "preta",
            shoes: "preto"
        }
    },
    {
        id: 2,
        clothes: {
            shirt: "roxa",
            pants: "preta",
            shoes: "preto"
        }
    },
    {
        id: 3,
        clothes: {
            shirt: "laranja",
            pants: "branca",
            shoes: "verde"
        }
    },
    {
        id: 4,
        clothes: {
            shirt: "verde",
            pants: "preta",
            shoes: "preto"
        }
    },
    
]

function getUser(id, callback) {
    setTimeout(() => {
        const data = first_database[id]

        return callback(null, {
            id: data.id,
            name: data.name,
            username: data.username
        })
    }, 1000);
}

function getClothes(userId, callback) {
    setTimeout(() => {
        const data = second_database[userId]

        return callback(null, {
            id: data.id,
            shirt: data.clothes.shirt,
            pants: data.clothes.pants,
            shoes: data.clothes.shoes
        })
    }, 2000);
}



getUser(1, function solveUser(user_error, user) {
    if (user_error) {
        console.error("Deu ruim em USER", error)
        return;
    }
    getClothes(user.id, function solveClothes(clothes_error, clothes) {
        if (clothes_error) {
            console.error("Deu ruim em ROUPAS", clothes_error)
            return;
        }
        console.log(clothes)
    })
    console.log(user)
})