const assert = require("assert")
const { getPeople } = require("./service")
const nock = require("nock")

// instalamos os pacotes nock para simular as requisições

describe("Star Wars Test", () => {
    before(() => {
        const response = {
            count: 1,
            next: null,
            previous: null,
            results: [{
                name: "R2-D2",
                height: "96",
                mass: "32",
                hair_color: "n/a",
                skin_color: "white, blue",
                eye_color: "red",
                birth_year: "33BBY",
                gender: "n/a",
                homeworld: "https://swapi.dev/api/planets/8/",
                films: [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                species: [
                    "https://swapi.dev/api/species/2/"
                ],
                vehicles: [],
                starships: [],
                created: "2014-12-10T15:11:50.376000Z",
                edited: "2014-12-20T21:17:50.311000Z",
                url: "https://swapi.dev/api/people/3/"
            }]
        }

        // toda vez que o user quiser fzr a requisição no swapi, ele não precisará pois o nock já fez isso
        // logo o teste ocorrerá mais rapidamente
        nock("https://swapi.dev/api/people")
        .get("/?search=r2-d2&format=json")
        .reply(200, response)
    })

    it("deve buscar o r2d2 com o formato correto", async () => {
        // definindo o formato de resposta da requisição 
        const expected = [{name: "R2-D2", height: "96"}]
        const baseName = `r2-d2`

        // fazendo a requisição e atribuindo a resposta
        const result = await getPeople(baseName)

        // espera-se que os valores sejam iguais
        assert.deepEqual(result, expected)
    })
})