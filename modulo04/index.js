const Commander = require("commander");
const Database = require("./database");
const Hero = require("./hero");

const options = Commander.opts()

async function main() {
    Commander
        .version("v1")
        .option("-n, --name [value]", "Hero's Name")
        .option("-p, --power [value]", "Hero's Power")
        .option("-i, --id [value]", "Hero's Id")
        
        .option("-r, --register", "Register a Hero")
        .option("-l, --list", "List a Heroes")
        .option("-d, --delete", "Remove a Hero")
        .option("-u, --update [value]", "Update a Hero Information")
        .parse(process.argv);

    const hero = new Hero(options)


    try {
        if(options.register) {
            // id vem com undefined, aqui eu tiro ele pra dps ser substituido pelo Date.now()
            delete hero.id;

            // tentando cadastrar herói
            const result = await Database.register(hero);

            // se deu ruim e retornou false, mando mensagem de erro
            if (!result) {
                console.error("Couldn't register hero");
                return;
            }

            // se todo ocorreu bem, mando mensagem de sucesso
            console.log("Hero registered successfuly!");
        }

        if(options.list) {
            // chamando todos os itens da db
            const result = await Database.list();

            // dando log na listagem
            console.log(result);
            return;
        }


        if(options.delete) {
            // tentando deletar herói
            const result = await Database.delete(hero.id);
            

            // se alguma coisa deu ruim e ele retornou false, mando mensagem de erro
            if(!result) {
                console.error("Couldn't delete Hero");
                return;
            }

            // se tudo ocorreu bem, mando mensagem de sucesso
            console.log("Hero removed successfuly!");
            return;
        }

        if(options.update) {
            const id = parseInt(options.update);

            // remover todas as chaves que estiverem como undefined | null
            const data = JSON.stringify(hero);
            const updateHero = JSON.parse(data);

            // tentando atualizar herói
            const result = await Database.update(id, updateHero);

            if(!result) {
                console.error("Couldn't update hero!");
                return;
            }

            console.log("Hero updated successfuly!");
            return;
        }
    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main()