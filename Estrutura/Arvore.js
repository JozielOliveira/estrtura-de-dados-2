class Tree { 
    
    constructor(){
        this.item = null
        this.direita = null
        this.esquerda = null
    }

    insert (item = any) {
        if (this.item == null) {// verifiaca se há elemento na raiz
            this.item = item
        } else if (item < this.item){
            if (this.esquerda == null)
                this.esquerda = new Tree()
            return this.esquerda.insert(item)
        } else{
            if (this.direita == null)
                this.direita = new Tree()
            return this.direita.insert(item)
        }
        
    }

    search (item, next) {
        if (this.item == item)
            if (next)
                next(this)
            else
                return true
        else if (item < this.item && this.esquerda != null)
            return this.esquerda.search(item, next)
        else if (this.direita != null)
            return this.direita.search(item, next)
        else
            return false
    }
        
    inOrdem () {
        if (this.item != null)
            this.ordem("inOrdem")
    }
    
    posOrdem () {
        if (this.item != null) {
            this.ordem("posOrdem")
            console.log(this.item)// Raiz
        }
    }

    preOrdem () {
        if (this.item != null) {
            console.log(this.item)
            this.ordem("preOrdem")// Raiz
        }
    }

    ordem (func){
        if (this.esquerda != null)
            this.esquerda[func]()//Esquerda
        if (func === "inOrdem") 
            console.log(this.item)// Raiz
        if (this.direita != null)
            this.direita[func]() //Direita
    }
                
    regra1 () {
        console.log(this.item)
        if (this.esquerda != null)
            return this.esquerda.regra2("direita") // Vai pra esquerda e procura o maior valor pra atribuir no lugar
        else if (this.direita != null)
            return this.direita.regra2("esquerda") // Vai pra esquerda e procura o menor valor pra atribuir no lugar
        else
            return null
    }

    regra2 (ladoSubstituido) {
        let ladoSubstituto = ladoSubstituido !== "direita" ?  ladoSubstituido : "esquerda"

        if (this[ladoSubstituido] != null)
            return this[ladoSubstituido].regra2(ladoSubstituido)
        else if (this[ladoSubstituto] != null) {
            let value = this.item
            this.item = this[ladoSubstituto].item
            this.direita = this[ladoSubstituto].direita
            this.esquerda = this[ladoSubstituto].esquerda
            return value
        } else {
            let value = this.item
            this.item = null
            this.direita = null
            this.esquerda = null
            return value
        }
    }

    delete (item) {
        // Chama o metodo de procura, e com a referencia de onde foi encontrada o valor/item
        this.search(item, ref => ref.item = ref.regra1() )// Aplica a primeira regra
    }
}
    
        
arvore = new Tree()
arvore.insert(10)
arvore.insert(5)
arvore.insert(4)
arvore.insert(7)
arvore.insert(6)
arvore.insert(3)
arvore.insert(13)
arvore.insert(12)
arvore.insert(11)
arvore.insert(14)
arvore.insert(15)
arvore.insert(8)
arvore.insert(9)

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
arvore.delete(10)
console.log("Mostrar em preOrdem")
arvore.preOrdem()

