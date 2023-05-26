#exercicio 2:nome do úsuario e senha, mas a senha não pode ser igual ao nome de usúario!

nome= str(input('Nome de usúario:'))
senha= input('Senha:')

while (senha==nome):
    print ('Erro!!!!!!!!')
    nome= str(input('Nome de usúario:'))
    senha=input('Senha:')
