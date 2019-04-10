class Pilha :
    # construtor
    def __init__(self, lista):
        self.lista = lista
    # metodo de insercao
    def push(self, elem):
        self.lista.append(elem)
    # metodo de remocao do
    def pop(self):
        self.lista.pop()
    # metodo de listagem
    def listar(self):
        a = 0
        for item in self.lista:
            a += 1
            print(a,' ', item)