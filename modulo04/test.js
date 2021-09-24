const { deepEqual, ok } = require("assert");
const { list } = require("./database");
const database = require("./database");

const DEFAUL_ITEM_REGISTER = {
    id: 1,
    name: "Flash",
    power: "Speed"
}

describe("Suite de manipulação de Heróis", () => {
    before(async () => {

        // se não tiver nenhum item, ele vai registrar um
        const isThereSomeItem = await database.list();
        !isThereSomeItem.length && await database.register(DEFAUL_ITEM_REGISTER);
    })

    it("Deve pesquisar heróis usando arquivos", async () => {
        const expected = DEFAUL_ITEM_REGISTER;

        // isso é uma destructor, serve pra eu pegar o item respectivo no array
        // ex: [item1 -> [0], item2 -> [1]]
        const [result] = await database.list(expected.id)

        deepEqual(result, expected)
    })

    it("deve cadastrar um herói, usando arquivos", async() => {
        const databaseItems = await database.list()
        const expected = [...databaseItems, DEFAUL_ITEM_REGISTER];

        await database.register(DEFAUL_ITEM_REGISTER);
        const databaseAfterRegister = await database.list()

        console.log(expected);
        console.log(databaseAfterRegister);

        ok(databaseAfterRegister, expected)
    })
})