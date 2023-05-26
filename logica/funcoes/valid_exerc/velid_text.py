maiuscula= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
senha= input('Senha: ')

def maius ():
    for check in maiuscula:
        if check in maiuscula:
            print ('Senha válida!!!!!!!!!!')
            break
        else:
            print ('Senha Inválida!!!!!\n A senha tem que ter pelo menos 1 letra maiuscula!!!!!')
maius()