def argument (a):
    if a >=1:
        return 'P'
    elif a <0:
        return 'N'
    else:
        return 'Zero'
    
print ("O número digitado recebe o valor de",argument(-8))
print ("O número digitado recebe o valor de", argument(8))
print ("O número digitado recebe o valor de", argument(0))
