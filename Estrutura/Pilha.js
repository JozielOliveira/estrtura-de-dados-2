const { addR, rmR, list } = require('./fun');

class Pilha {
    constructor(arr){
        this.array = arr;
    }
    push(elem){
        this.array = addR(this.array,elem); 
    }
    pop(){
        this.array = rmR(this.array);
    }
    list(){
        list(this.array);
    }
}

module.exports = Pilha;