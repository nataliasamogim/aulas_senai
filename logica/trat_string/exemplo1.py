nome= 'Naligeek'

print (nome[0])
print (nome[1])
print (nome[2])

print (nome[-1])
print (nome[-2])
print (nome[-3])

print ('------------------------------------------------')

nome= 'Pythonista'

#Desde a posição de índice 3 (que é o 'h') até a última posição da string
print (nome[3:])

#Desde a posição de índice -3 (que é o 's') até a última posição da string
print (nome[-3:])

print ('--------------------------------------------------')

nome= 'Python é uma linguagem de programação de alto nível'
print (nome[13:23])

print ('--------------------------------------------------')

var1= 'variável'
var2= 'string'

print (var1,var2)
print (var1+var2)
print (var1+" "+var2)

print ('--------------------------------------------------')

nome= 'Natália'
sobrenome= 'Samogim'
nome_comp= nome+ " "+ sobrenome
print (nome_comp)

print ('--------------------------------------------')

linha= '-'

print (linha*28)
print ('Nosso código')
print (linha*28)

print ('---------------------------------------------------')
# print('{} {}' .format (var, 1))  passagem de parametros 

qtd_macas= 10
qtd_melancias= 3
qtd_uvas= 22.2

texto= 'Vou comprar {} maças, trocar {} melancias e comer {} uvas'
print (texto.format(qtd_macas, qtd_melancias, qtd_uvas))