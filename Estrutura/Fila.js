const { addL, rmR, list } = require('./fun');

class Fila {
    constructor(arr){
        this.array = arr;
    }
    push(elem){
        this.array = addL(this.array,elem); 
    }
    pop(){
        this.array = rmR(this.array);
    }
    list(){
        list(this.array);
    }
}

module.exports = Fila;