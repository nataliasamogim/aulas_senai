# processamento.py
from gravar_arquivo import gravar_em_arquivo

def processar_dados(dados):
    # Função para processar os dados recebidos do Flask
    # Retorna os dados processados
    dados_processados = dados

    print("\nDados Recebidos:")
    print(f"Nome: {dados_processados.get('nome')}")
    print(f"E-mail: {dados_processados.get('email')}")
    print(f"Cidade: {dados_processados.get('cidade')}")
    print(f"Data de Nascimento: {dados_processados.get('dataNascimento')}")
    print(f"Senha: {dados_processados.get('senha')}")
    print("\nDados Processados com Sucesso!\n")

    # Chama a função para gravar os dados em um arquivo
    gravar_em_arquivo(dados_processados)

    # Retorna os dados processados
    return dados_processados