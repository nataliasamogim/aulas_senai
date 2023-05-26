prest= float(input('Qual é o valor da prestação?:'))
dias= int(input('Quantos dias de atraso?:'))

def valorpagamento(prest,dias):
    cont=0
    valordia=0
    while prest!=0:
        if dias==0:
            total= prest
            print ('-------------------------------------------------')
            print ('O valor da prestação é:', prest)
            print ('O valor da multa é de: 0')
            print ('O do juros por dia de atraso é de: 0')           
            print ('-------------------------------------------------')
             
        else:
            valor_mult= prest+0.03*prest
            mora=0.001*prest*dias 
            total=valor_mult+mora
            print ('-------------------------------------------------')
            print ('O valor da prestação é:', prest)
            print ('O valor da multa é de:',valor_mult)
            print ('O do juros por dia de atraso é de:',mora)
            print ('O valor total a ser pago é de:', total)
            print ('-------------------------------------------------')
        
        cont= cont+1
        valordia += total
        prest= float(input('Qual é o valor da prestação?:'))
        dias= int(input('Quantos dias de atraso?:'))

    print ('-------------------------------------------------')
    print ('Quantidade de boletos:', cont)
    print ('Montante do valor total:', valordia)
    print ('-------------------------------------------------')
    
valorpagamento(prest,dias)



