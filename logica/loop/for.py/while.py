#exemplo 1:como o contador é zero e precisa ser menor que 5, ele vai dar print e somar um ao contador
# até o número ser igual/maior que 5

contador= 0

while contador<5:
    print (f'O valor do contador é {contador}')
    contador +=1

#exemplo 2: ele não para de pedir o nome até escrever Natália

nome= str(input('Nome:'))
while nome !='Natália':
    nome=str(input('Nome:'))