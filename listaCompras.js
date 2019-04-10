const readline = require('readline-sync')

class Produto {
    constructor (TypeStruct) {
        this.listProduct = new TypeStruct()
    }
    init() {
        while (true) {
            let option
            console.log(`
                ---- Menu ---- \n
                1 - Adiciona \n
                2 - Remove \n
                3 - Lista \n
                ctrl+c - Sair \n
                --------------
            `)
            option = readline.questionInt('opcao : ')
            switch (option) {
                case 1 : this.add()
                break
                case 2 : this.remove()
                break
                case 3 : this.list()
                break
            }
        }
    }
    add() {
        const produto = readline.question('Produto : ')
        const quantidade = readline.questionInt('Quantidade : ')
        this.listProduct.push({ produto, quantidade })
    }
    remove() {
        this.listProduct.pop()
    }

    list() {
        this.listProduct.list()
    }

}


module.exports = Produto