const { deepEqual, ok } = require("assert");

const DEFAUL_ITEM_REGISTER = {
    name: "Flash",
    power: "Speed",
    id: 1
}

describe("Suite de manipulação de Heróis", () => {

    it("deve cadastrar um herói, usando arquivos", async() => {
        const expected = DEFAUL_ITEM_REGISTER;



        ok(null, expected)
    })
})