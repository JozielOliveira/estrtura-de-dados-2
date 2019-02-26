const { fila, pilha } = require('../Estrutura')

const array = [{
    nome : '', 
    ano_nascimento : '12/12/1999', 
    altura : 0.0
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
