txt= 'Natália'

for item in txt:
    print (item)

print ('------------------------------------')

indice= 1
while indice< len (txt):
    print (txt[indice])
    indice +=1

print ('--------------------------------------')

prefixo = 'MSCBGM'
sufixo= 'ola'

for caractere in prefixo:
    print (caractere+sufixo)

print ('-----------------------------------------')

texto= 'As strings são sequências de caracteres'
print ('são' in texto)

print ('------------------------------------------')

texto= 'Tenha um ótimo dia'

if 'dia' in texto:
    print ('A sequência de caractere existe na string!')

print ('--------------------------------------------')

texto= 'A tecnologia move o mundo !'

print ('qualidade' not in texto)

if 'qualidade' not in texto:
    print ("A palavra 'qualidade' realmente não existe dentro da string!!!!")

print ('-----------------------------------------------')

variavel= "Aprenda \%o\% Python"
print (variavel)

print ('-----------------------------------------------')

variavel= "contra \\'\\ barra"
print (variavel)

print ('------------------------------------------------')

variavel= 'Desejo quebrar \n essa linha'
print (variavel)

print ('--------------------------------------------------')

tabular= '\t\t\t'
variavel= 'Quero espaço ', tabular, 'para um tab'
print (variavel)

variavel= 'Quero espaço \tpara um tab'
print (variavel)

variavel= 'Quero espaço' +tabular+ 'para um tab'
print (variavel)

print ('--------------------------------------------------')

variavel= 'Aa\b Bb\b Cc\b '
print (variavel)

print ('-----------------------------------------------------')

variavel= '\101\102\103\104-\060\061\062\063'
print (variavel)

variavel= '\x61\x62\x63\x64- \x30\x31\x32\x33'
print (variavel)