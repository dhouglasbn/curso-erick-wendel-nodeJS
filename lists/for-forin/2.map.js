const service = require("./service");

async function main() {
    try {
        const result = await service.getPeople("a");
        // const names = [];
        // console.time("forEach")
        // result.results.forEach(item => {
        //     names.push(item.name)
        // })
        // console.timeEnd("forEach: ")

        console.time("map")
        // const names = result.results.map(function (person) {
        //     return person.name
        // })

        const names = result.results.map(person => person.name)
        console.timeEnd("map")

        console.log("names: ", names);
    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main()