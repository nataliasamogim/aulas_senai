s= ['Julia', 'Roxo', 'Bolo', 'Malu', 'Pombinha', 'Laura', 'Stefan', 'Lívia', 'Família']

def comparar (palavra,lista):
    if palavra in lista:
        return 'Parabens fofes, esta palavra está na lista!'
    else:
        return 'Sorry, essa palavra não está na lista!'
    
print (comparar('Roxo', s))
print (comparar('Pombinha', s))
print (comparar('Vermelho', s))

    
    