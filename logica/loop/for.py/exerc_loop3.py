# -----------------------------------------------------------
# Nome: Validar cadastro
#------------------------------------------------------------ 
# Data: 03/05/2023  |Desenvolvedora: Natália Ap. Samogim
# ----------------------------------------------------------- 
# Função: Validar dados de cadastro
# ----------------------------------------------------------- 
# Descrição: Pedir o nome (+ de 3 caractéres), a idade (entre 0 e 150) 
# o salário (maior que 0), sexo (f ou m) e estado civil (s,c,v,d)
# -----------------------------------------------------------

nome= str(input('Nome:'))
cont=0 
while cont<=3:
    for i in nome:
        cont+=1
    if cont >=3:
        cont=3
        break
    else:
        cont=0
        nome= str (input('Nome:'))

idade =int(input('Idade:'))
while (idade<0) or (idade>150):
    print ('Erro!!!!!!')
    idade =int(input('Idade:'))

salario= float(input('Salário:'))
while (salario<0):
    print ('Erro!!!!!!!')
    salario= float(input('Salário:'))

sexo= input('Sexo (f) ou (m):')
while (sexo!='f') and (sexo!='m'):
    print ('Erro!!!!!!')
    sexo= str(input('Sexo (f) ou (m):'))

est_civil= str(input('Estado civil: Solteiro(s), Casado(c), Viúvo(v) ou Divorciado(d):'))
while (est_civil!='s') and (est_civil!='c') and (est_civil!='v') and (est_civil!='d'):
    print ('Erro!!!!!!!!!!')
    est_civil= str(input('Estado civil: Solteiro(s), Casado(c), Viúvo(v) ou Divorciado(d):'))
    