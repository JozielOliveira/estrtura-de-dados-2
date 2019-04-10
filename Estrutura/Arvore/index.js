const readLine = require('readline-sync')
const Arvore = require('./Arvore')
const menu = 
`\n----- Menu ----- \n
1 - Inserir Nó\n
2 - Remover Nó\n
3 - Listar em Ordem\n
4 - Listar em Pré Ordem\n
5 - Listar em Pós Ordem\n
6 - Pesquisar\n
0 - Sair\n
`
const arvore = new Arvore()
let task

do {
    console.log(menu)
    task = readLine.questionInt('Qual tarefa deseja executar? ')
    console.clear()
    switch (task) {
        case 1 : arvore.insert(readLine.questionInt('Digite um valor inteiro para o nó: ')) 
        break
        case 2 : arvore.delete(readLine.questionInt('Digite o valor do nó que deseja excluir da arvore: '))
        break
        case 3 : arvore.inOrdem()
        break
        case 4 : arvore.preOrdem()
        break
        case 5 : arvore.posOrdem()
        break
        case 6 : console.log(arvore.search(readLine.questionInt('Digite o valor do nó que seja pesquisar: ')))
        break
    }
} while (task)

