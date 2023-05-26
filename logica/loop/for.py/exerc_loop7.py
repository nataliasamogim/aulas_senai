numero= int (input('Digite um número:'))

for item in range (numero):
    if (item%2==0):
        print (item)

print ('---------------------------------------------------')

for item in range (numero, -1, -1):
    if (item%2!=0):
        print (item)
