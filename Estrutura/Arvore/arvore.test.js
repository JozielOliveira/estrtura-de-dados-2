const Arvore = require('./Arvore')

/**
     10
     /
    5
   /
  4
 /
3
 */
function test_nos_a_esquerda() {
    arvore = new Arvore()
    arvore.insert(1)
    arvore.insert(5)
    arvore.insert(4)
    arvore.insert(3)
    // Mostrar em preOrdem
    console.log("Mostrar em preOrdem")
    arvore.preOrdem()
    // Mostrar em ordem
    console.log("Mostrar em ordem")
    arvore.inOrdem()
    // Mostrar em posOrdem
    console.log("Mostrar em posOrdem")
    arvore.posOrdem()
    console.log("Buscar numero 3")
    console.log(arvore.search(3))
    console.log("Buscar numero 18")
    console.log(arvore.search(18))
    console.log("")
    console.log("Delete 10")
    arvore.delete(1)
    console.log("Mostrar em preOrdem")
    arvore.preOrdem()
}

/**
     10
   /     \
  5      13
 / \    /  \
4   6  12  14
     \   \   \
      7  11  15
       \ 
        8
         \
          9
 */
function test_arvore_profundidade_6 () {
    arvore = new Arvore()
    arvore.insert(10)
    arvore.insert(5)
    arvore.insert(4)
    arvore.insert(1)
    arvore.insert(3)
    arvore.insert(6)
    //arvore.insert(7)
    //arvore.insert(8)
    //arvore.insert(9)
    arvore.insert(13)
    arvore.insert(12)
    arvore.insert(11)
    arvore.insert(14)
    arvore.insert(15)
    arvore.balancear()
    // Mostrar em preOrdem
    console.log("Mostrar em preOrdem")
    arvore.preOrdem()
    //// Mostrar em ordem
    //console.log("Mostrar em ordem")
    //arvore.inOrdem()
    //// Mostrar em posOrdem
    //console.log("Mostrar em posOrdem")
    //arvore.posOrdem()
    //console.log("Buscar numero 3")
    //console.log(arvore.search(3))
    //console.log("Buscar numero 18")
    //console.log(arvore.search(18))
    //console.log("")
    console.log("Delete 5")
    arvore.delete(5)
    console.log("Mostrar em preOrdem")
    arvore.preOrdem()
}
//console.log("----------- Primeiro teste -----------")
//test_nos_a_esquerda()
console.log("----------- Segundo teste -----------")
test_arvore_profundidade_6()