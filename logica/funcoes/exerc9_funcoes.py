numero= int(input('Digite um número:'))

def valor (numero):
   for n in range (numero):
        n +=1
        for i in range (n):
            i+=1
            print (str(i), end='')
        print ()

valor(numero)
