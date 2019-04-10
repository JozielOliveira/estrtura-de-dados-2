const listaCompras = require('./listaCompras');
const Fila = require('./Estrutura/Fila')

const EstruturaCompras = new listaCompras(Fila)

/**   Pilha
const Pilha = require('./Estrutura/Pilha')
const EstruturaCompras = new listaCompras(Pilha)
*/

EstruturaCompras.init()