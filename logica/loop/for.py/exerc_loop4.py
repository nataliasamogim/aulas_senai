# -----------------------------------------------------------
# Nome: Exercícios de Loop
#------------------------------------------------------------ 
# Data: 05/05/2023  |Desenvolvedora: Natália Ap. Samogim
# ----------------------------------------------------------- 
# Função: Calcular e escrever a quantidade de anos necessárias para a população A
# ultrapassar a população B
# ----------------------------------------------------------- 
# Descrição: População A= 80.000 com crescimento de 3%
# População B=200.000 com crescimento de 1.5%
# A população de A tem que ultrapassar a de B
# -----------------------------------------------------------

#Nomenando a popA e popB
pop_a= int(80000)
pop_b= int (200000)
ano = 2023

#Enquanto a popA for menor que B, repetir a conta e somar 1 ao ano
while pop_a<pop_b:
    pop_a += pop_a*0.03
    pop_b += pop_b*0.015
    ano += 1

#Resultado
print ('-----------------------------------------------')
print ('O número de anos necessários são:',ano)
print ('A população A é de:', pop_a)
print ('A população B é de:', pop_b)
print ('------------------------------------------------')

    