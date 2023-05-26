
def converter():
    while True:
        hora= str(input('Digite um horário: '))
        if len (hora)<5:
            hora='0'+hora
        if hora=='sair':
            break
        ph= (hora[0] + hora[1])
        ph= int(ph)
        if ph>12:
            nhora= ph - 12
            print ('São',str(nhora)+hora[2]+hora[3]+hora[4],'para','P.M')
        elif ph>=1 and ph<=12:
            print ('São',hora,'para','A.M')
        elif ph==12:
            print(hora,'P.M')
        elif ph==0:
            print('12:00 A.M')
converter()

