const { fila, pilha } = require('../Estrutura')

const array = [1,2,4,5,6,7,8,9]
const Pilha = new pilha(array);
const Fila = new fila(array);

console.log('pilha')
Pilha.list()
Pilha.pop()
console.log('fila')
Fila.list()
console.log('pilha')
Pilha.list()
