# Nome do componente: processamento.py
# Autor: Maria Luiza
# Data de criação/alteração: 01-12-2023
# Descrição detalhada: Nesse componente processamos os dados recebidos do formulário e printamos eles no terminal.
# Além de armazenar as mensagens de erro recebidas do componete validacoes em uma lista chamada mesagens_erro.
from gravar_arquivo import gravar_em_arquivo
from gravar_arquivo import gravar_em_arquivo_log

from validacoes import (
    validar_nome,
    validar_email,
    validar_senha,
    confirmar_senha
)

# Nome da função: processar_dados
# Autor: Maria Luiza
# Data de criação/alteração: 01-12-2023
# Parâmetros entrada:
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados e printados no terminal.
# 1° Retorno:
# Nome: retorna uma das funções, tipo: boleano, finalidade: retornar qual dos formulários está sendo preenchido.
# Descrição/observação: essa função analisa se o input nome não possui valor, caso não possua ele retorna a função do
# login, significando que o que está sendo preenchido é o login, caso possua valor no input, ele retorna a função do cadastro, 
# que é ele que está sendo preenchido.

def processar_dados(dados):
    if dados.get('nome') == None:
        retorno = processar_dados_log(dados)
    else:
        retorno = processar_dados_cad(dados)

    return (retorno)

# Nome da função: processar_dados_cad
# Data de criação/alteração: 01-12-2023
# Parâmetros entrada:
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados e printados no terminal.
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao usuário qual o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga seu cadastro
def processar_dados_cad(dados):
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

    mensagens_erro = []  # Cria uma lista vazia para armazenar mensagens de erro

    # Início do bloco (mensagens de erro)
    # Os dados recebidos dos inputs serão validados pela função correspondente e caso haja erro será armazenado na variável mensagens_erro
    mensagens_erro.append(validar_nome(dados.get('nome', '')))
    mensagens_erro.append(validar_email(dados.get('email', '')))
    # Precisa ser dois parâmetros já que no componete validacoes colocamos dois parâmetros na função corfimar_senha
    mensagens_erro.append(validar_senha(dados.get('senha', '')))
    mensagens_erro.append(confirmar_senha(dados.get('senha', ''), dados.get('confirmsenha', '')))
    # Fim do bloco (mensagens de erro)

    # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        # Chama a função para gravar os dados em um arquivo, caso não tenha mensagens de erro
        gravar_em_arquivo(dados_processados)
        # Retorna os dados processados
        return {'erro': False, 'mensagem': 'Dados Processados com Sucesso!'}
    

# Nome da função: processar_dados_log  
# Data de criação/alteração: 01-12-2023
# Parâmetros entrada:
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados e printados no terminal
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao usuário qual o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga seu cadastro
def processar_dados_log(dados):

    dados_processados = dados

    print("\nDados Recebidos do Login:")
    print(f"E-mail: {dados_processados.get('email_log')}")
    print(f"Senha: {dados_processados.get('senha_log')}")
    print("\nDados Processados com Sucesso!\n")

    mensagens_erro = [] # Cria uma lista vazia para armazenar mensagens de erro

    # Início do bloco (mensagens de erro)
    # Os dados recebidos dos inputs serão validados pela função correspondente e caso haja erro será armazenado na variável mensagens_erro
    mensagens_erro.append(validar_email(dados_processados.get('email_log', '')))
    mensagens_erro.append(validar_senha(dados_processados.get('senha_log', '')))
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        # Chama a função para gravar os dados em um arquivo, caso não tenha mensagens de erro
        gravar_em_arquivo_log(dados_processados)
        # Retorna os dados processados
        return {'erro': False, 'mensagem': 'Dados Processados com Sucesso!'}
