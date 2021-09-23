const assert = require("assert")
const { getPeople } = require("./service")

describe("Star Wars Test", () => {
    it("deve buscar o r2d2 com o formato correto", async () => {
        // definindo o formato de resposta da requisição 
        const expected = [{name: "R2-D2", height: "96"}]
        const baseName = `r2-d2`

        // fazendo a requisição e atribuindo a resposta
        const result = await getPeople(baseName)

        // espera-se que os valores sejam iguais
        assert.deepEqual(result, expected)
    })
})