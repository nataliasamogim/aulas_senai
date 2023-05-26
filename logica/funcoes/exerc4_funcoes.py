palavra= str(input('Digite uma palavra:'))
minimo= int(input('Digite um número mínimo:'))
maximo= int(input('Digite um número máximo:'))

def valor (palavra,minimo,maximo):
    s=len(palavra)
    if (s>=minimo) and (s<=maximo):
        return ('True')
    else:
        return ('False')
    
result= valor (palavra,minimo,maximo)
print (result)