const Commander = require("commander");
const Database = require("./database");
const Hero = require("./hero");

const options = Commander.opts()

async function main() {
    Commander
        .version("v1")
        .option("-n, --name [value]", "Hero's Name")
        .option("-p, --power [value]", "Hero's Power")
        
        .option("-r, --register", "Register a Hero")
        .option("-l, --list", "List a Heroes")
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
    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main()