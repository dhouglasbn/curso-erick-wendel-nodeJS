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

function main() {
    const Heroes = driver.define("Heroes", {
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
}