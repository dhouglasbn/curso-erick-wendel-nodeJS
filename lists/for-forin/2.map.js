const service = require("./service");

Array.prototype.myMap = function (callback) {
    const newMappedArray = [];

    for ( let index = 0; index <= this.length - 1; index++ ) {
        const result = callback(this[index], index)
        newMappedArray.push(result)
    }

    return newMappedArray;
}

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

        // const names = result.results.myMap((person, index) => `${index}${person.name}`)
        const names = result.results.myMap(( person, index ) => person.name )
        console.timeEnd("map")

        console.log("names: ", names);
    } catch (error) {
        console.error("DEU RUIM", error);
    }
}

main()