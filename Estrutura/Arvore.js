class Tree { 
    
    constructor(){
        this.valor = null
        this.direita = null
        this.esquerda = null
    }

    insert (valor) {
        if (this.valor == null) {
            this.valor = valor
        } else if (valor < this.valor){
            if (this.esquerda == null)
                this.esquerda = new Tree()
            return this.esquerda.insert(valor)
        } else{
            if (this.direita == null)
                this.direita = new Tree()
            return this.direita.insert(valor)
        }
        
    }

    search (valor, next) { 
        if (this.valor == valor)
            // Se não haver um proxima função a ser executada retorna true
            // Se haver um proxima funcão, passa como parametro o contexto em que foi encotrado o valor
            return next ? next(this) : true
        else if (valor < this.valor && this.esquerda != null)
            return this.esquerda.search(valor, next)
        else if (this.direita != null)
            return this.direita.search(valor, next)
        else
            return false
    }
        
    inOrdem () {
        if (this.valor != null)
            this.ordem("inOrdem")
    }
    
    posOrdem () {
        if (this.valor != null) {
            this.ordem("posOrdem")
            console.log(this.valor)// Raiz
        }
    }

    preOrdem () {
        if (this.valor != null) {
            console.log(this.valor)// Raiz
            this.ordem("preOrdem")
        }
    }

    ordem (func){
        if (this.esquerda != null)
            this.esquerda[func]()//Esquerda
        if (func === "inOrdem") 
            console.log(this.valor)// Raiz
        if (this.direita != null)
            this.direita[func]() //Direita
    }
                
    regra1 () {
        // Primeira regra é varificar se a raiz possue sub-arvores
        if (this.esquerda != null) // Se tiver à esquerda
            return this.esquerda.regra2("direita") // Vai pra esquerda e procura o maior valor pra atribuir no lugar
        else if (this.direita != null) // Se tiver à direita
            return this.direita.regra2("esquerda") // Vai pra direita e procura o menor valor pra atribuir no lugar
        else // Se a raiz não tiver sub-arvores, ela vai ser anulada
            return null
    }

    regra2 (ladoSubstituido) {
        // Logica => se o valor que está sendo procurado(ladoSubstituido) for da direita
        // logo o que pode tomar o lugar vai ser o da esquerda, e vise versa
        const ladoSubstituto = ladoSubstituido != "direita" ?  "direita" : ladoSubstituido
        
        if (this[ladoSubstituido] != null)
            // Caso a variavel for ladoSubstituido = direita, 
            // o algoritmo vai sempre pra direita procurando o maior
            // pois o maior está à direita
            return this[ladoSubstituido].regra2(ladoSubstituido)
        else if (this[ladoSubstituto] != null) // Caso não ter mais sub-arvores à direita, verifica-se se há à esquerda
            // Se tiver sub-arvore à esquerda, executa a troca de atributos, da esquerda, 
            // para a arvore em contexto e retorna o valor do antigo contexto
            return this.swap(this, ladoSubstituido, ladoSubstituto)
        else
            // Se tiver sub-arvore à esquerda, executa a anulação da sub-arvore em contexto,
            // e retorna o valor do antigo contexto
            return this.swap(this)

    }

    swap (ref, ladoSubstituido, ladoSubstituto) {
        const value = ref.valor // Pega o valor do contexto a ser alterado
        if (ladoSubstituido) { // Verifica se há alguma sub-arvore pare substituir
            ref.valor = ref[ladoSubstituto].valor // Atribui ao valor em contexto, o valor da posição de substituição, exemplo esquerdo
            ref[ladoSubstituido] = ref[ladoSubstituto][ladoSubstituido]// Atribui ao lado(e/d) em contexto, o valor da posição de substituiçãovalor, exemplo esquerdo
            ref[ladoSubstituto] = ref[ladoSubstituto][ladoSubstituto] ? ref[ladoSubstituto][ladoSubstituto] : null // Atribui ao lado(e/d) em contexto, o valor da posição de substituiçãovalor, exemplo direito
        } else {
            ref.valor = ref[ladoSubstituido] = ref[ladoSubstituto] = null // Se não tiver sub-arvore de substituição, anula a sub-arvore em contexto
        }
        // retorna o da sub-arvore valor antes de ser alterado
        return value
    }

    delete (valor) {
        // Chama o metodo de procura, e com a referencia de onde foi encontrada o valor
        // Aplica a primeira regra no contexto em que foi entrado o valor
        this.search(valor, ref => ref.valor = ref.regra1() )
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

