const { getPeople } = require("./service");

Array.prototype.myFilter = function (callback) {
    const array = []
    for( index in this ) {
        const item = this[index]

        // callback vai ser a function: (item, index, array) => { retorna true ou false }
        const result = callback( item, index, this )

        if( !result ) continue;
        array.push(item)
    }

    return array;
}

async function main() {
    try {
        const { results } = await getPeople("a");

        // const larsFamily = results.filter(item => {
        //     // por default precisa retornar um boolean
        //     // para informar se deve manter ou remover da lista
        //     // false -> remove da lista
        //     // true -> mantém
        //     // não encontrou -> retorna -1
        //     // encontrou -> retorna a posição no array
            
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
        //     return result;
        // })

        // filtrando as pessoas que forem da família lars
        const larsFamily = results.myFilter((item, index, array) => 
            item.name.toLowerCase().indexOf("lars") !== -1 )

        // retornando só o nome de cada pessoa
        const names = larsFamily.map(person => person.name);

        console.log(names);
    } catch (error) {
        console.error("DEU RUIM", error);
    }

}

main()