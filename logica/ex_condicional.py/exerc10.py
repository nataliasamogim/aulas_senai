ident= float(input('Qual o seu número de identificação?:'))
n1= float(input('Digite sua primeira nota:'))
n2= float(input('Digite sua segunda nota:'))
n3= float(input('Digite sua terceira nota:'))
me= float (input('Qual sua média de exercícios?:'))

ma= (n1+n2*2+n3*3+me)/7

if (ma>=90):
    c='A'

elif (ma>=75) or (ma<90):
    c='B'

elif (ma>=60) or (ma<75):
    c='C'

elif (ma>=40) or (ma<60):
    c='D'

elif (ma<40):
    c='E'

if (c=='A') or (c=='B') or (c=='C'):
    print ('O número do aluno é:',ident, 'As notas são:',n1,n2,n3, 'A média de exercícios é:', me, 'A média de aproeitamento é:', ma,'A nota é;' ,c, 'Aluno aprovado!!')

else:
    print ('O número do aluno é:',ident, 'As notas são:',n1,n2,n3, 'A média de exercícios é:', me, 'A média de aproeitamento é:', ma,'A nota é;' ,c, 'Aluno reprovado!!')


