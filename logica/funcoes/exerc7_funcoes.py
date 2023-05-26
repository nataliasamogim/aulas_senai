print ('----------------------------------Seja Bem-Vindo--------------------------------------')

p= str(input('Deseja iniciar o jogo? (Sim) ou (Não)?:'))
if (p=='Sim'):
    p2= str(input('Um dos jogadores escolha uma palavra:')).lower() .strip()
else:
    str(input('Então o que vieram  fazer aqui?'))

for x in range(100):
    print()

digitadas= []
acertos= []
erros=0

qtp=len(p2)

print('-------------------------|')
print('|')
print('|')
print('|')
print('|')
print('|')
print('|')
print('|')
print('|', qtp*' _ ')

letra1= str(input('Digite uma letra:'))

while True:
    senha=''
    for letra in p2:
        senha=senha+ letra1 if letra1 in acertos else'.'
    print (senha)
    if senha==p2:
       print('Você acertou!!!!')
       break
    tentativa= input('\n:Digite uma letra:').lower() .strip()
    if tentativa in digitadas:
        print('Você já tentou esta letra!!!!')
        continue
    else:
        digitadas +=tentativa
        if tentativa in p2:
         acertos+=tentativa
        else:
         erros += 1
         print ('Você errou!!!!')
    print('-------------------------|')
    print('|                        :')
    print('|                        O' if erros>=1 else '|')
    print('|')
    print('|')
    print('|')
    print('|')
    print('|')
    print('|', qtp*' _ ')

    linha2=''
    if erros==2:
        linha2= r" | "
    elif erros==3:
        linha2= r"\|"
    elif erros >= 4:
        linha2= r'\|/'
    print(f'x{linha2}')
    linha3=''
    if erros==5:
        linha3 += r"/"
    if erros>=6:
        linha3+= r' / \ '
    print(f'x\n==================')
    if erros==6:
        print('Enforcado!!!!')
        print(f"A palavra secreta era: {p2}")
        break
    


     
    

    

