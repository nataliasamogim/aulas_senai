n= int(input('Digite um número:'))

if(n>= 0) and (n<=9):
 print('O número é menor que 10!')

elif(n>=10):
 print('O número é igual ou maior que 10!')

nome= str(input('Qual seu nome?:'))
idade= int(input('Qual sua idade:'))
dinheiro=float(input('Tem grana? Digite o valor:'))

if(idade>=18) and (dinheiro>=2000):
 print(nome,'pode tirar carta!')

else:
  print(nome,'não pode tirar carta! Volte com 18 anos e com dinheiro.')


linguagem='C++'

if linguagem=='C++':
  print('Linguagem de programacao compilada')
elif linguagem== 'Phyton':
  print('Linguagem de alto nível')
elif linguagem== 'Java':
  print('Linguagem muito usada no mercado de trabalho')
else:
  print('Nenhuma das opções')