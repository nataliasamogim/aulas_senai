n1= int (input('Digite um número:'))
n2= int (input('Digite outro número:'))

def valor (n1,n2):
    mod= n1%n2
    if (mod==0):
        return ('True')
    else:
        return ('False')
    
resultado= valor(n1,n2)
print (resultado)
