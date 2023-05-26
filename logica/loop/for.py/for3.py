#Imprime só o 1 e 2, parando no 3
for item in [1,2,3,4,5]:
    if item ==3:
        break
    else:
        print(item)

#Pula o número 3
for item in [1,2,3,4,5]:
    if item ==3:
        continue
    else:
        print(item)