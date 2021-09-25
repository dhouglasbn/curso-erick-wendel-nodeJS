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

        if (!hero.id) {
            const length = data.length
            hero.id = length + 1;
        }

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
        const finalData = [
            ...data,
            heroWithId
        ]

        const result = await this.writeFile(finalData)
        return result;
    }

    async list(id) {
        const data = await this.getFileData()
        const filterredData = data.filter(item => id ? item.id === id : true)
        return filterredData;
    }

    async delete(id) {
        if(!id) {
            return this.writeFile([]);
        }

        // listagem de tudo da db
        const data = await this.getFileData()

        // tentando encontrar o item, se houver vai retornar o index na db
        const index = data.findIndex(item => item.id === parseInt(id))

        // se não encontrar na db
        if(index === -1) {
            throw Error("O herói informado não existe")
        }

        // a partir do meu index, remover 1 item
        data.splice(index, 1);
        return this.writeFile(data);
    }

    async update(id, updates) {
        // pegando todos os itens da db
        const data = await this.getFileData();

        // tentando encontrar o item q tem o id q foi passado e atribuir seu index da array
        const index = data.findIndex(item => item.id === parseInt(id));

        // se não tem nenhum id ele retorna erro
        if(index === -1) {
            throw Error("O herói informado não existe!");
        }

        // current é o item do banco de dados que eu achei
        const current = data[index];

        // primeiro botar os itens do item da db e dps os itens de updates
        // por updates vir depois de current e ter chaves com nomes iguais as de current
        // no final só vai ter uma chave de cada nome repetido, q vai ser de updates
        const updatedObject = {
            ...current,
            ...updates
        }

        // remover 1 item a partir do index
        data.splice(index, 1);

        // o herói atualizado vai pro final da db
        return await this.writeFile([
            ...data,
            updatedObject
        ])
    }
}

module.exports = new Database()