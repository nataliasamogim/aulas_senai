custo= float(input('Digite um  valor:'))
taxaimposto= float(input('Digite o valor da taxa:'))

def somaimposto (custo,taxaimposto):
    return custo+taxaimposto/100*custo

print( somaimposto(custo,taxaimposto))