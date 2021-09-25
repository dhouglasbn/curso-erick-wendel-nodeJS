const Commander = require("commander");

async function main() {
    Commander
        .version("v1")
        .option("-n, --name [value]", "Nome do Herói")
        .option("-p, --power [value]", "Hero's Power")
        .option("-r, --register", "Register Hero")
        .parse(process.argv);


    try {
        
    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main()