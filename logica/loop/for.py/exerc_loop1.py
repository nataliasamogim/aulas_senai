#exercicio 1: a nota tem que ser entre zero e dez, se não repete!
nota= float(input('Qual a sua nota?:'))

while  (nota<0) or (nota>10):
    print('Valor inválido!')
    nota= float(input('Qual a sua nota?:'))
print ('Nota válida',nota)
