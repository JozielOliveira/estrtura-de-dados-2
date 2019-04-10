class Fila :
    # cosntrutor
    def __init__(self, lista):
        self.lista = lista
    # metodo de insercao
    def push(self, item):
        self.lista = [item] + self.lista
    # metodo de remocao
    def pop(self):
        self.lista.pop()
    # metodo de listagem
    def listar(self):
        a = len(self.lista)
        for item in self.lista:
            a-=1
            print(a,' ',item)
