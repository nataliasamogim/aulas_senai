def sesi ():
    print ('Somos SENAI!!!!!!!!!!!!!!!!')

sesi ()

print ('|-----------------------------------------------------------|')

def imprime_nome (nome):
    print (f'Nome: {nome}')

imprime_nome ('Natália')
imprime_nome ('Laura')
imprime_nome ('Malu')
imprime_nome ('Julia Dias')
imprime_nome ('Stefan')

print ('|-----------------------------------------------------------|')

def flor (flor='Rosa', cor='vermelha'):
    print (f"A cor da {flor} é {cor}") #O f é para chamar o resultado nas chaves 
flor()
flor ('Orquídea', 'azul') #dando outros valores para a função

print ('|-----------------------------------------------------------|')

def monta_computador (cpu='', armazenamento=0, memoria=0):
    print (f'A configuração é: \n\t- CPU: {cpu} \n\t- Armazenamento {armazenamento} Tb\n\t- Memória: {memoria} Gb')
monta_computador ('Intel Core i9',4,64)
monta_computador ('AMD',2,64)

print ('|-----------------------------------------------------------|')

def mont_computador(memoria=64, armazenamento=4, cpu='Intel Core i9'):
    print (f'A configuração é: \n\t- CPU: {cpu} \n\t- Armazenamento {armazenamento} Tb\n\t- Memória: {memoria} Gb')

mont_computador ()

print ('|-----------------------------------------------------------|')

def maior_30(*args): #o * é significa que vai receber
    print (args)
    print (type(args))
    qtd= len(args)
    print(qtd)

    for num in args:
        if num >30:
            print (num)

maior_30(10,20,30,40,50,60)

print ('|-----------------------------------------------------------|')

def dados_pessoa(**kwargs):
    print (type(kwargs))

    for chave, valor in kwargs.items():
        print (f'{chave}: {valor}')

dados_pessoa (nome='Lucas', idade=27, carreira='Desenvolvedor Fullstack')
dados_pessoa (nome='Junior', idade=42, carreira='Desenvolvedor Fullstack')

print ('|-----------------------------------------------------------|')

def soma_dois_numeros_e_calcula_media (valor1,valor2):
    soma=valor1 + valor2
    media= (valor1+valor2)/2
    return soma,media

resultados = soma_dois_numeros_e_calcula_media(32,15)
print (resultados)
print (soma_dois_numeros_e_calcula_media (50,10))

print ('|-----------------------------------------------------------|')

def soma(valor1,valor2):return valor1 + valor2
def divisao(valor1,valor2):return valor1 / valor2

print (soma(1,5))
print (divisao(8,2))