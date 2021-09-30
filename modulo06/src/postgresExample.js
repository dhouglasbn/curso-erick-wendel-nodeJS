// npm i sequelize pg-hstore pg

const Sequelize = require("sequelize");

const driver = new Sequelize(
    "heroes",
    "dhouglas",
    "minhasenhasecreta",
    {
        host:"localhost",
        dialect: "postgres",
        quoteIdentifiers: false,
        operatorAliases: false
    }
)

const driver = new Sequelize(
    "heroes",
    "dhouglas",
    "minhasenhasecreta",
    {
        host:"localhost",
        dialect: "postgres",
        quoteIdentifiers: false,
        operatorAliases: false
    }
)

async function main() {
    const Heroes = driver.define("heroes", {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: Sequelize.STRING,
            required: true,
        },
        power: {
            type: Sequelize.STRING,
            required: true
        }
    }, {
        tableName: "HEROES",
        freezeTableName: false,
        timestamps: false
    })

    await Heroes.sync()
    await Heroes.create({
        name: "Green Lantern",
        power: "Ring's green energy"
    })

    const result = await Heroes.findAll({
        raw: true
    })
    console.log("result", result);
}

main()