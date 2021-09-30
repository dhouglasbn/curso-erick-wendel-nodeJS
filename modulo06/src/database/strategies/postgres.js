const ICrud = require("./interfaces/interfaceCrud");
const Sequelize = require("sequelize");

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null,
        this._heroes = null
    }

    isConnected() {
        
    }

    defineModel() {
        this._heroes = driver.define("heroes", {
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

    create(item) {
        console.log("O item foi salvo em Postgres");
    }

    _connect() {
        this._driver = new Sequelize(
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
    }
}

module.exports = Postgres;