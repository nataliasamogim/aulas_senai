# processamento.py
from gravar_arquivo import gravar_em_arquivo;
from gravar_arquivo import gravar_em_arquivo_log

def processar_dados(dados):
    # Função para processar os dados recebidos do Flask
    # Retorna os dados processados
    dados_processados = dados

    print("\nDados Recebidos do Cadastro:")
    print(f"Nome: {dados_processados.get('nome')}")
    print(f"E-mail: {dados_processados.get('email')}")
    print(f"Senha: {dados_processados.get('senha')}")
    print(f"Confirmar senha: {dados_processados.get('confirmsenha')}")
    print("\nDados Processados com Sucesso!\n")
    print("\n")
    print("\nDados Recebidos do Login:")
    print(f"E-mail: {dados_processados.get('email_log')}")
    print(f"Senha: {dados_processados.get('senha_log')}")
    print("\nDados Processados com Sucesso!\n")

    # Chama a função para gravar os dados em um arquivo
    gravar_em_arquivo(dados_processados)
    gravar_em_arquivo_log(dados_processados)
    


    # Retorna os dados processados
    return dados_processados