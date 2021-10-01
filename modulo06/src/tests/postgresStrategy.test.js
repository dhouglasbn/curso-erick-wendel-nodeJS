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
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it("Should register a hero", async () => {
        const result = await context.create(MOCK_REGISTER_HERO);
        delete result.id;

        assert.deepEqual(result, MOCK_REGISTER_HERO);
    })
    
    it("Should list heroes", async () => {
        const [result] = await context.read({name: MOCK_REGISTER_HERO.name})
        delete result.id
        assert.deepEqual(result, MOCK_REGISTER_HERO)
    })
})