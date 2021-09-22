const { getPeople } = require("./service");

async function main() {
    try {
        const { results } = await getPeople("a");
        const heights = results.map(item => parseInt(item.height))
        console.log("heights: ", heights);

        const total = heights.reduce((previous, next) => {
            return previous + next;
        })

        console.log("total", total);

    } catch (error) {
        console.error("DEU RUIM", error);
    }

}

main()