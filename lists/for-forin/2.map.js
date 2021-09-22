const service = require("./service");

async function main() {
    try {
        const result = await service.getPeople("a");
        let names = [];
        result.results.forEach(item => {
            names.push(item.name)
        })

        console.log("names: ", names);
    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main()