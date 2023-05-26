peso= float(input('Qual o seu peso?:'))
altura= float(input('Qual a sua altura?:'))

conta= peso/altura**2

if (conta<18.5):
    print (conta,'abaixo do peso!')

elif (conta>=18.5) and (conta<=25):
    print (conta,'peso normal!')

elif (conta>=25) and (conta<=30):
    print (conta,'acima do peso!')

elif (conta>=30):
    print (conta,'obeso!')