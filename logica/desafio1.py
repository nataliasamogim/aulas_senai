alunos= int(input('Quantos alunos?:'))
grupos= int(input('Quantos grupos?:'))

modulo=alunos%grupos
quant=alunos//grupos

if (modulo==0):
  print ('O número de alunos em cada grupo é:',quant)

else:
  print ('O número de alunos em cada grupo é:',quant, 'e restou:', modulo)
