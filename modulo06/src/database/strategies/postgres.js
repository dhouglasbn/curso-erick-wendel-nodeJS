const ICrud = require("./interfaces/interfaceCrud");
const Sequelize = require("sequelize");

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null,
        this._heroes = null
    }

    async isConnected() {
        try {
            await this._driver.authenticate();
            return true
        } catch (error) {
            console.log("DEU RUIM", error);
            return false;
        }
    }

    async defineModel() {
        this._heroes = this._driver.define("heroes", {
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
        await this._heroes.sync()
    }

    async create(hero) {
        const { dataValues } = await this._heroes.create(hero)
        return dataValues
    }

    async read(item = {}) {
        return this._heroes.findAll({where: item, raw: true})
    }

    async connect() {
        this._driver = new Sequelize(
            "heroes",
            "dhouglas",
            "minhasenhasecreta",
            {
                host:"localhost",
                dialect: "postgres",
                quoteIdentifiers: false

            }
        )
        await this.defineModel()
    }
}

module.exports = Postgres;