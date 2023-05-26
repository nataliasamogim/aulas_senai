operacao= input('Digite a operação: (+) adição, (-) subtração, (*) multiplicação, (/)divisão:')
n1= float (input('Digite o primeiro número:'))
n2= float (input('Digite o segundo número:'))

match operacao:
    case '+':
        resultado= n1+n2
        print ('O resultado da conta é:',resultado)
    case '-':
        resultado= n1-n2
        print ('O resultado da conta é:',resultado)
    case '*':
        resultado= n1*n2
        print ('O resultado da conta é:',resultado)
    case '/':
        resultado= n1/n2
        print ('O resultado da conta é:',resultado)
    case _:
        print ('Operação invalida!!!')
       
