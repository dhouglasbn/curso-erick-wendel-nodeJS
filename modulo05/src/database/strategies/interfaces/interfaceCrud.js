class NotImplementedException extends Error {

    // o super chama a constructor da classe que a gente deu extends
    // extends é herdar todas as variáveis e funções da classe referida
    constructor() {
        super("Not implemented Exception")
    }
}

class ICrud {
    create(item) {
        throw new NotImplementedException()
    }

    read(query) {
        throw new NotImplementedException()
    }

    update(id, item) {
        throw new NotImplementedException()
    }

    delete(id) {
        throw new NotImplementedException()
    }
}

module.exports = ICrud