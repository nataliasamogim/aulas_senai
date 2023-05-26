# -----------------------------------------------------------
# Nome: desafios de condicional
#------------------------------------------------------------ 
# Data: 03/05/2023  |Desenvolvedor: Natália Ap. Samogim
# ----------------------------------------------------------- 
# Função: calcular o salário total referido ao mês
# ----------------------------------------------------------- 
# Descrição: inserir quanto ganha por hora e o número de horas trabalhadas no mês.
# calcular o salário bruto, quanto pagou ao INSS, quanto pagou ao sindicato, imposto de renda,
# salário líquido, plano de saúde e previdencia.
#
# -----------------------------------------------------------

#Perguntas na tela
valor= float (input('Quanto que ganha por hora?:'))
horas= float (input('Quantas horas trabalha no mês?:'))
dependente= int (input('Tem quantos dependente (cônjuge e filhos)?:'))

#Conta do salário
salario= valor*horas

#Condições da conta 
if (salario<=1903.98) and (salario==0):
    imp_renda=0

elif (salario>=1903.98) and (salario<=2826.65):
    imp_renda= salario*0.075

elif (salario>=2826.66) and (salario<=3751.5):
    imp_renda= salario*0.15

elif (salario>=3751.6) and (salario<=4664.68):
    imp_renda= salario*0.225

elif (salario>=4664.68):
    imp_renda= salario*0.275

#Equações 
inss= salario*0.08
sind= salario*0.05
previdencia= 0.0178*salario
plano_saude= 138+138*dependente
desconto= inss+sind+previdencia+plano_saude+imp_renda

#Salário líquido
liquido= salario - desconto 

print ('O seu salário bruto é de R$', salario, 'e o líquido é de R$', liquido, 'Você pagou de inss R$', inss, '  e de sindicato  R$', sind, 'e de imposto R$',imp_renda) 
print ('O seu plano de saúde é de R$',plano_saude, 'e a sua previdencia é R$', previdencia)

