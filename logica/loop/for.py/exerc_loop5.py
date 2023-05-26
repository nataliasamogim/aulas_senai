cont=1

for i in range(1000):
    modulo=cont%3
    modulo2=cont%7
    if (modulo==0) and (cont//3):
        print (cont,'É multiplo de 3!!!!!')
    elif (modulo2==0) and (cont//7):
        print (cont, 'É multiplo de 7!!!!')
    else:
        print (cont)
    cont+=1    
    