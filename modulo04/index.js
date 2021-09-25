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
        .option("-r, --remove [value]", "Remove a Hero")
        .parse(process.argv);

    const hero = new Hero(options)


    try {
        if(options.register) {
            const result = await Database.register(hero);

            if (!result) {
                console.error("Couldn't register hero");
                return;
            } 

            console.log("Hero registered successfuly!");
        }

        if(options.list) {
            const result = await Database.list();

            console.log(result);
            return;
        }

        if(options.remove) {
            const result = await Database.delete(hero.id);
            
            if(!result) {
                console.error("Couldn't delete Hero");
                return;
            }

            console.log("Hero removed successfuly!");
        }
    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main()