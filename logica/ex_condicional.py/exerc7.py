h= float(input('Qual a sua altura?:'))
sexo= str(input('Qual o seu sexo? (homem) ou (mulher):'))


if (sexo=='homem'):
    conta= (72.7*h)-58
    print (conta, 'peso ideal')

elif (sexo=='mulher'):
    conta= (62.1*h)-44.7
    print (conta, 'peso ideal')

   