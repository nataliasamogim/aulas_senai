operacao= str (input('Digite a operação desejada (soma, sub, mult, div):'))
numero1= int (input('Digite o primeiro número:'))
numero2= int (input('Digite o segundo número:'))

if (operacao=='soma'):
    resultado= (numero1)+ (numero2)
elif (operacao=='sub'):
    resultado= (numero1)-(numero2)
elif (operacao=='mult'):
    resultado= (numero1)* (numero2)
elif (operacao=='div'):
    resultado= (numero1)/(numero2)
else:
    resultado= 'Operação não suportada!!!'

print (resultado)
