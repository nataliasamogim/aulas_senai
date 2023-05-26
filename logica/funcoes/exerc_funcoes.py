num1= int (input('Digite um número:'))
num2= int (input('Digite outro número:'))

def valor (num1,num2):
    if (num1>num2):
        return (num1)
    else:
        return (num2)

resultado= valor (num1,num2)
print (num1,'==', num2, 'máximo->',resultado)
            
