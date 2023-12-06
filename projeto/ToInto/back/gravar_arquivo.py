#   gravar_arquivo.py
#   Autora: Marília
#   Criação: 01/12 - Alteração: 01/12
#   Descrição: Tem a funcionalidade de gravar os dados processados do usuário em arquivos de texto (txt),
#   sendo o arquivo dos dados do cadastro diferente do login.
#   Observações Pertinentes: Esse código contém duas funções, sendo elas para gravar dados do cadastro e o outro
#   do login, as ambas lidam com o possíveis erros durante a escrita nos arquivos utilizando tratamento de exceções.
#   Entretanto, a quantidade de informações gravadas em cada uma é visível.


#   Função gravar_em_arquivo
#   Autora: Marília
#   Data de criação: 01/12 - Alteração 01/12
#   Parâmetros de entrada: dados, nome_arquivo
#   dados - string - tem a finalidade de gravar as informações do cadastro do usuário
#   nome_arquivo - string - tem a finalidade de salvar os dados do cadastro em forma de texto (txt).
#   Retorno NULO
#   Descrição/Observação: A função é responsável por receber as informações e tenta adicionar esses dados  
#   formatados em arquivo txt.Se a operação for bem-sucedida, confirma a gravação; caso contrário, captura e exibe
#   mensagens de erro para lidar com possíveis falhas durante a escrita no arquivo.
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


#   Função gravar_em_arquivo_log
#   Autora: Marília
#   Data de criação: 01/12 - Alteração: 01/12
#   Parâmetros de entrada: dados, nome_arquivo_login
#   dados - string - tem a finalidade de gravar as informações de login do usuário
#   nome_arquivo_login - string - tem a finalidade de salvar os dados do login em forma de texto (txt).
#   Retorno NULO
#   Descrição/Observação: A função tem o objetivo de adicionar as informações do login (e-mail e senha) em um arquivo
#   de registro, o código tenta abrir o arquivo em modo de adição, escrever as informações formatadas no documento e
#   e inserir uma linha vazia para separar os registros . Se for bem-sucedida, uma mensagem confirmando a gravação no
#   arquivo é exibida; caso contrário, qualquer exceção ocorrida durante a escrita é capturada e uma mensagem de erro
#   é mostrada no terminal para lidar com possíveis falhas.
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

