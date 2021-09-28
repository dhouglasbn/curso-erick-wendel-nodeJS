const { deepEqual, ok } = require("assert");
const { list } = require("./database");
const database = require("./database");

const DEFAUL_ITEM_REGISTER = {
    id: 1,
    name: "Flash",
    power: "Speed"
}

const DEFAUL_ITEM_UPDATE = {
    id: 2,
    name: "Green Lantern",
    power: "Ring's Energy"
}

describe("Suite de manipulação de Heróis", () => {
    before(async () => {

        // se não tiver nenhum item, ele vai registrar um
        const isThereSomeItem = await database.list();
        !isThereSomeItem.length && await database.register(DEFAUL_ITEM_REGISTER);
    })

    it("Deve pesquisar heróis usando arquivos", async () => {
        const expected = DEFAUL_ITEM_REGISTER;

        // isso é uma destructor, serve pra eu pegar o item respectivo no array
        // ex: [item1 -> [0], item2 -> [1]]
        const [result] = await database.list(expected.id)

        deepEqual(result, expected)
    })

    it("Deve cadastrar um herói, usando arquivos", async() => {
        
        // pegando a db antes de qualquer operação
        const databaseItems = await database.list()

        // espera-se que o teste seja bem sucedido quando o novo herói estiver adicionado ao banco
        const expected = [...databaseItems, DEFAUL_ITEM_REGISTER];

        // registrando o novo herói
        await database.register(DEFAUL_ITEM_REGISTER);

        // listando novamente a db
        const databaseAfterRegister = await database.list()

        // o teste será bem sucedido se a nova db for igual ao resultado esperado
        deepEqual(databaseAfterRegister, expected)
    })

    it("Deve remover um herói pelo seu id", async () => {
        // ao final do database.delete eu vou dar um database.writeFile, que se for bem sucedido retorna true

        // espera-se que seja retornado um true
        const expected = true;

        // dando delete no item e se der tudo certo true vai ser retornado ao meu
        const result = await database.delete(DEFAUL_ITEM_REGISTER.id)
        deepEqual(result, expected)
    })

    it("Deve atualizar um herói pelo seu id", async () => {
        // pegando os dados de DEFAULT_ITEM_UPDATE, name e power vão ser alterados
        // esse é meu resultado esperado
        const expected = {
            ...DEFAUL_ITEM_UPDATE,
            name: "Batman",
            power: "Money"
        }

        // os dados que quero alterar
        const newData = {
            name: "Batman",
            power: "Money"
        }

        // chamando o update, passando id e os dados para atualizar
        await database.update(DEFAUL_ITEM_UPDATE.id, newData);

        // pegando o primeiro item que tiver o id do meu herói que ta sendo modificado
        const [result] = await database.list(DEFAUL_ITEM_UPDATE.id)

        // o result deve ser igual minha expected
        deepEqual(result, expected)
    })
})