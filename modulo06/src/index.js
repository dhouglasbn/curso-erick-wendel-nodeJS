const ContextStrategy = require("./database/strategies/base/contextStrategy");
const MongoDB = require("./database/strategies/mongodb");
const Postgres = require("./database/strategies/postgres");

const contextMongoDB = new ContextStrategy(new MongoDB());
contextMongoDB.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create()