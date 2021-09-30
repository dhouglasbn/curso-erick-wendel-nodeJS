const assert = require("assert")
const ContextStrategy = require("../database/strategies/base/contextStrategy");
const Postgres = require("../database/strategies/postgres");

const context = new ContextStrategy(new Postgres())

describe("Postgres Strategy", async() => {
    

    it("Should connect to PostgresSQL", async () => {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
})