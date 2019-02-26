const { fila, pilha } = require('../Estrutura')

const array = [{ 
    codigo: 1,
    peso : 0.0, 
    data_recebimento : '12/02/2019', 
    valor_compra : 0.0
}]
const Pilha = new pilha(array);
const Fila = new fila(array);

console.log('pilha')
Pilha.list()
Pilha.pop()
console.log('fila')
Fila.list()
console.log('pilha')
Pilha.list()
