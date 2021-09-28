const { getPeople } = require("./service");

// initialValue é um valor pra evitar que o programa quebre ao usar um array vazio
Array.prototype.myReduce = function (callback, initialValue) {

    // se passar initialValue, o finalValue começa como ele, se nã o passar começa como o primeiro item do array
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0]

    for( let index = 0; index <= this.length - 1; index++ ) {
        finalValue = callback( finalValue, this[index], this)
    }

    return finalValue;
}

async function main() {
    try {
        const { results } = await getPeople("a");
        const heights = results.map(item => parseInt(item.height))
        console.log("heights: ", heights);

        // const total = heights.reduce((previous, next) => {
        //     return previous + next;
        // })

        const myArray = [
            ["Erick", "Wendel"],
            ["NodeBr", "Nerdzão"]
        ];

        // [["Erick", "Wendel"], ["NodeBr", "Nerdzão"]] => concat() => ["Erick", "Wendel", "NodeBr", "Nerdzão"]
        // => join(", ") => "Erick, Wendel, NodeBr, Nerdzão"
        const total = myArray.myReduce((previous, next) => {
            return previous.concat(next)
        }, []).join(", ")

        console.log("total", total);

    } catch (error) {
        console.error("DEU RUIM", error);
    }

}

main()
