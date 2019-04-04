import sys
class Tree : 
    
    def __init__(self):
        self.item = None
        self.direita = None
        self.esquerda = None
    
    def insert(self,item):
        if self.item == None: # verifiaca se há elemento na raiz
            self.item = item
            return
        elif item < self.item:
            if self.esquerda == None:
                self.esquerda = Tree()
            return self.esquerda.insert(item)
        else:
            if self.direita == None:
                self.direita = Tree()
            return self.direita.insert(item)

    def search(self, item):
        if self.item == item: # verifiaca se há elemento na raiz
            return True
        elif item < self.item:
            if self.esquerda == None:
                return False
            return self.esquerda.search(item)
        else:
            if self.direita == None:
                return False
            return self.direita.search(item)
        
    def inOrdem(self):
        if self.item != None:
            if self.esquerda != None :
                self.esquerda.inOrdem()#E
            print(self.item)           #R
            if self.direita != None :
                self.direita.inOrdem() #D
    
    def posOrdem(self) :
        if self.item != None:
            if self.esquerda != None :
                self.esquerda.posOrdem()#E
            if self.direita != None :
                self.direita.posOrdem() #D
            print(self.item)           #R

    def preOrdem(self) :
        if self.item != None:
            sys.stdout.write("(")
            sys.stdout.write(str(self.item))           #R
            if self.esquerda != None :
                self.esquerda.preOrdem()#E
            if self.direita != None :
                self.direita.preOrdem() #D
            sys.stdout.write(")")
                

    def regra1(self):
        if self.esquerda != None:
            return self.esquerda.regra2() # Vai pra esquerda e procura o maior valor pra atribuir no lugar
        elif self.direita != None :
            return self.direita.regra22() # Vai pra direita e procura o menor valor pra atribuir no lugar
        else :
            return None

    def regra2(self):
        if self.direita != None :
            return self.direita.regra2()
        elif self.esquerda != None :
            value = self.item
            self.item = self.esquerda.item
            self.direita = self.esquerda.direita
            self.esquerda = self.esquerda.esquerda
            return value
        else :
            value = self.item
            self.item = None
            self.direita = None
            self.esquerda = None
            return value
    def regra22(self):
        if self.esquerda != None :
            return self.esquerda.regra22()
        elif self.direita != None :
            value = self.item
            self.item = self.direita.item
            self.direita = self.direita.direita
            self.esquerda = self.direita.esquerda
            return value
        else :
            value = self.item
            self.item = None
            self.direita = None
            self.esquerda = None
            return value


    def delete(self, item):
        if self.item == item:
            self.item = self.regra1()
        elif item < self.item and self.esquerda != None:
            self.esquerda.delete(item)
        elif self.direita != None:
            self.direita.delete(item)

        return

    
        
arvore = Tree()
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

# Mostrar em preOrdem
print("Mostrar em preOrdem")
arvore.preOrdem()
# Mostrar em ordem
print()
print("Mostrar em ordem")
arvore.inOrdem()
# Mostrar em posOrdem
print("Mostrar em posOrdem")
arvore.posOrdem()
print("Buscar numero 3")
print(arvore.search(3))
print("Buscar numero 18")
print(arvore.search(18))
print("")
print("Delete 10")
arvore.delete(10)
print("Mostrar em preOrdem")
arvore.preOrdem()

