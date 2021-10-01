const assert = require("assert")
const ContextStrategy = require("../database/strategies/base/contextStrategy");
const Postgres = require("../database/strategies/postgres");

const context = new ContextStrategy(new Postgres())
const MOCK_REGISTER_HERO = {
    name: "hawkman",
    power: "arrows"
}

describe("Postgres Strategy", async() => {

    before(async () => {
        await context.connect();
    })
    

    it("Should connect to PostgresSQL", async () => {
        // chama um método sequelize authenticate 
        // se toda a conexão estiver occorrendo bem retorna true
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it("Should register a hero", async () => {
        // registra um herói lá na db e se der certo retorna os dados q mandei na requisição
        const result = await context.create(MOCK_REGISTER_HERO);

        // meu mock não tem id
        delete result.id;

        // comparando o mock com o resultado
        assert.deepEqual(result, MOCK_REGISTER_HERO);
    })
    
    it("Should list heroes", async () => {
        const [result] = await context.read({name: MOCK_REGISTER_HERO.name})
        delete result.id
        assert.deepEqual(result, MOCK_REGISTER_HERO)
    })
})