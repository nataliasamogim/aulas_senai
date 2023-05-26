valor= float(input('Qual o valor?:'))
cond= str(input('Qual a condição de pagamento? Digite: (1) À vista em dinheiro/cheque. (2) À vista em cartão de crédito. (3) Em duas vezes. (4) Em quatro vezes.'))

if (cond=='1'):
    conta= valor-0.1*valor
    print (valor)

elif (cond=='2'):
    conta= valor-0.15*valor
    print (conta)

elif (cond=='3'):
    print (valor)

elif (cond=='4'):
    conta= valor+0.1*valor