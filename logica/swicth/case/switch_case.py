dia= int(input('Digite um número:'))

match dia:
    case 1:
        print ('Domingo')
    case 2:
        print ('Segunda-feira')
    case 3:
        print ('Terça-feira')
    case 4:
        print ('Quarta-feira')
    case 5:
        print ('Quinta-feira')
    case 6:
        print ('Sexta-feira')
    case 7:
        print ('Sábado')
    case _:
        print ('O valor é inválido')