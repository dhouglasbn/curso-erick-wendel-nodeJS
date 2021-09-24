const { readFile } = require("fs");
const { promisify } = require("util");

// readFile é uma função que pode demorar, por isso tranformamos ela em uma promise

const readFileAsync = promisify(readFile)

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


    writeFile() {

    }

    async list(id) {
        const data = await this.getFileData()
        const filterredData = data.filter(item => id ? item.id === id : true)
        return filterredData;
    }


}

module.exports = new Database()