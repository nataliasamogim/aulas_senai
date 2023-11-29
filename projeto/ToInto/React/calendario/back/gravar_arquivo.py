def gravar_em_arquivo(dados, nome_arquivo='dados.txt'):
    # Função para processar e gravar dados em um arquivo de texto
    try:
        # Processa os dados

        # Grava os dados em um arquivo de texto
        with open(nome_arquivo, 'a') as arquivo:
            arquivo.write("\nDados Gravados:\n")
            arquivo.write(f"Nome: {dados.get('nome')}\n")
            arquivo.write(f"E-mail: {dados.get('email')}\n")
            arquivo.write(f"Senha: {dados.get('senha')}\n")
            arquivo.write(f"Confirmar senha: {dados.get('confirmsenha')}\n")
            arquivo.write("\n")

        print(f"Os dados foram gravados no arquivo '{nome_arquivo}' com sucesso!")
    except Exception as e:
        print(f"Erro ao gravar dados no arquivo: {e}")

def gravar_em_arquivo_log(dados, nome_arquivo_log='dados_log.txt'):
    # Função para processar e gravar dados em um arquivo de texto
    try:
        # Processa os dados

        # Grava os dados em um arquivo de texto
        with open(nome_arquivo_log, 'a') as arquivolog:
            arquivolog.write("\nDados Gravados:\n")
            arquivolog.write(f"E-mail: {dados.get('email_log')}\n")
            arquivolog.write(f"Senha: {dados.get('senha_log')}\n")
            arquivolog.write("\n")
           
        print(f"Os dados foram gravados no arquivo '{nome_arquivo_log}' com sucesso!")
    except Exception as e:
        print(f"Erro ao gravar dados no arquivo: {e}")

if __name__ == "__main__":
    # Teste: Chame a função com dados fictícios para verificar a gravação
    dados_teste = {
        "nome": "John Doe",
        "email": "john.doe@example.com",
        "senha": "senha123",
        "confirmsenha": "senha123",
    }

    gravar_em_arquivo(dados_teste)
    gravar_em_arquivo_log(dados_teste)