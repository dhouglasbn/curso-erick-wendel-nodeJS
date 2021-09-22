const { getPeople } = require("./service");

async function main() {
    try {
        const { results } = await getPeople("a");

        const larsFamily = results.filter(item => {
            // por default precisa retornar um boolean
            // para informar se deve manter ou remover da lista
            // false -> remove da lista
            // true -> mantém
            // não encontrou -> retorna -1
            // encontrou -> retorna a posição no array
            
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
            return result;
        })

        // retornando só o nome de cada pessoa
        const names = larsFamily.map(person => person.name);

        console.log(names);
    } catch (error) {
        console.error("DEU RUIM", error);
    }

}

main()