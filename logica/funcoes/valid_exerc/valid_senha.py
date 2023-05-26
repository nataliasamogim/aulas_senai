maiuscula= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
minuscula= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
especial= ['!','@','#','$','%','&','*','-','_','.']
num= ['0','1','2','3','4','5','6','7','8','9']

senha= str(input('Senha: '))

def caracteres (senha):
    acerto=''
    erroqtd=''
    erroma=''
    erromin=''
    erroesp=''
    erronum=''
    erroc=''
    if len(senha)>=8:
        acerto += 'C'
    else:
        erroqtd= 'Pelo menos 8 caracteres!!!!!!!!!!!!'
    for i in senha:
        if i in maiuscula:
            acerto += 'E'
            break
        else:
            erroma= 'Deve conter letras maiusculas!!!!'
    for i in senha:
        if i in minuscula:
            acerto += 'R'
            break
        else:
            erromin= 'Deve conter letras minusculas!!!!'
    for i in senha:
        if i in num:
            acerto+= 'T'
            break
        else:
            erronum='Deve conter números!!!!!!!!!!'
    for i in senha:
        if i in especial:
            acerto+='O'
            break
        else:
            erroesp='Deve conter caracteres especiais!!!!!!!'
    for i in senha:
        senha[cont]==senha[cont+1] and senha[cont]==senha[cont+1]
        
        if cont==(len(senha)-2):
            acerto+='!'
            break
        else:
            erroc= 'Não pode ter tres letras repetidas uma do lado da outra!'
        cont=0
        
    if acerto=='CERTO':
        print ('Senha OK!!!!')
    else:
        print (erroqtd,'-',erroma,'-',erromin,'-',erroesp ,'-', erronum,'-')

caracteres(senha)

                   

        

