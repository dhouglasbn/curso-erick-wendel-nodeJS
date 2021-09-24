const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

// readFile é uma função que pode demorar, por isso tranformamos ela em uma promise

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

// Outra forma de obter dados do json
// const jsonData = require("./heroes.json");

class Database {
    constructor() {
        this.FILE_NAME = "heroes.json"
    }
    
    async getFileData() {
        // aqui eu to chamando o readFile passando o nome do arquivo e o encoding, soq async
        const file = await readFileAsync(this.FILE_NAME, "utf8");

        // o arquivo ele naturalmente vem em formato de Buffer
        return JSON.parse(file.toString())
    }


    async writeFile(data) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(data));
        return true;
    }

    async register(hero) {
        const data = await this.getFileData()
        const id = hero.id <= 2 ? hero.id : Date.now();

        /**
         * Vai vir sem id
         * {
         * name: "Flash",
         * power: "Speed"
         * }
         * // vai gerar o id
         * {
         * id: 283798217389
         * }
         * // vai juntar o id
         * {
         * name: "Flash",
         * power: "Speed",
         * id: 283798217389
         * }
         */

        const heroWithId = {
            id,
            ...hero
        }

        // dados que já existiam em heroes.json + o novo herói
        const finalData = {
            ...data,
            heroWithId
        }

        const result = await this.writeFile(finalData)
        return result;  
    }

    async list(id) {
        const data = await this.getFileData()
        const filterredData = data.filter(item => id ? item.id === id : true)
        return filterredData;
    }


}

module.exports = new Database()