const service = require("./service");

async function main() {
    try {
        const result = await service.getPeople("a")
        const names = []
        
        // console.time("for")
        // for( let index = 0; index <= result.results.length - 1; index++ ) {
        //     const person = result.results[index]
        //     names.push( person.name )
        // }
        // console.timeEnd("for")

        console.time("forin")
        for( let index in result.results ) {
            const person = result.results[index]
            names.push( person.name )
        }
        console.timeEnd("forin")
        
        console.log(`names: `, names);
    } catch (error) {
        console.error("erro interno", error);
    }
}

main()