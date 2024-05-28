# Nome do componente: processamento.py
# Autor: Maria Luiza
# Data de criação/alteração: 01-12-2023
# Descrição detalhada: Nesse componente processamos os dados recebidos do formulário e printamos eles no terminal.
# Além de armazenar as mensagens de erro recebidas do componete validacoes em uma lista chamada mesagens_erro.
from gravar_arquivo import gravar_em_arquivo
from gravar_arquivo import gravar_em_arquivo_log
from gravar_banco import gravar_dados
from recuperar_cad import verificar_informacao_log
from recuperar_cad import recuperar_inf_formani
from update_banco import atualizar_cad
from delete_banco import deletar_cad

from validacoes import (
    validar_nome,
    validar_email,
    validar_senha,
    confirmar_senha
)

from validacoes_cartao import (
    validar_nome_titular,
    validar_cpf,
    validar_num_cartao,
    validar_datavenc,
    validar_codseg,

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
# Processamento do Mobile -----------------------------------------------
    if dados.get('acao') == 'salvar_log':                                 
        print('Sim')
    else: 
        print('Não')
#-------------------------------------------------------------------------

# Processamento do Desktop -----------------------------------------------------
    if dados.get('nome') != None:
        retorno = processar_dados_cad(dados)
    elif dados.get('nome_titular') != None:
        retorno = processar_dados_cartao(dados)
    elif dados.get('id_cad') != None and dados.get('funcao') == 'del':
        print('processar', dados)
        retorno = excluir_todas_informacoes_usuario(dados.get('id_cad'))
        #retorno ='retorno delete'
    elif dados.get('id') != None and dados.get('funcao') != 'del':
        print('processar select', dados)
        retorno = recuperar_inf_formani(dados.get('id', ''))
    elif dados.get('nome_novo') != None:
        retorno = processar_alterar_cad(dados)
    else:
        print('processar', dados)
        retorno = processar_dados_log(dados)

    return (retorno)
#-------------------------------------------------------------------------------


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
    dados_gravacao = []

    dados_gravacao.append(dados_processados.get('nome'))
    dados_gravacao.append(dados_processados.get('email'))
    dados_gravacao.append(dados_processados.get('senha'))

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
        gravar_dados(dados_gravacao)
        print(dados_gravacao)
        # Retorna os dados processados
        return {'erro': False, 'mensagem': 'Dados Processados com Sucesso!'}


def processar_alterar_cad(dados):
    # Função para processar os dados recebidos do Flask
    # Retorna os dados processados
    dados_processados = dados

    update_dados = []

    update_dados.append(dados_processados.get('foto', ''))
    update_dados.append(dados_processados.get('nome_novo'))
    update_dados.append(dados_processados.get('email_novo'))
    update_dados.append(dados_processados.get('senha_nova'))
    # Adicione o ID do usuário
    update_dados.append(dados_processados.get('id'))

    print(update_dados)

    mensagens_erro = []  # Cria uma lista vazia para armazenar mensagens de erro

    # Início do bloco (mensagens de erro)
    # Os dados recebidos dos inputs serão validados pela função correspondente e caso haja erro será armazenado na variável mensagens_erro
    mensagens_erro.append(validar_nome(
        dados_processados.get('nome_novo', '')))  # Valida o novo nome
    mensagens_erro.append(validar_email(
        dados_processados.get('email_novo', '')))  # Valida o novo email
    # Precisa ser dois parâmetros já que no componete validacoes colocamos dois parâmetros na função corfimar_senha
    mensagens_erro.append(validar_senha(
        dados_processados.get('senha_nova', '')))  # Valida a nova senha
    # Fim do bloco (mensagens de erro)

    # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        alterar_cad = atualizar_cad(update_dados)
        print('teste', alterar_cad)
        return {'erro': False, 'mensagem': alterar_cad}
        # Chamar a função para recuperar os dados do usuário do banco de dados
        # return {'erro': False, 'mensagem': dados_usuario}


def processar_dados_cartao(dados):
    # Função para processar os dados recebidos do Flask
    # Retorna os dados processados
    dados_processados = dados
    dados_gravacao = []

    dados_gravacao.append(dados_processados.get('nome_titular'))
    dados_gravacao.append(dados_processados.get('cpf'))
    dados_gravacao.append(dados_processados.get('num_cartao'))
    dados_gravacao.append(dados_processados.get('datavenc'))
    dados_gravacao.append(dados_processados.get('cod_seguranca'))

    mensagens_erro = []  # Cria uma lista vazia para armazenar mensagens de erro

    # Início do bloco (mensagens de erro)
    # Os dados recebidos dos inputs serão validados pela função correspondente e caso haja erro será armazenado na variável mensagens_erro
    mensagens_erro.append(validar_nome_titular(dados.get('nome_titular', '')))
    mensagens_erro.append(validar_cpf(dados.get('cpf', '')))
    # Precisa ser dois parâmetros já que no componete validacoes colocamos dois parâmetros na função corfimar_senha
    mensagens_erro.append(validar_num_cartao(dados.get('num_cartao', '')))
    mensagens_erro.append(validar_datavenc(dados.get('datavenc', '')))
    mensagens_erro.append(validar_codseg(dados.get('cod_seguranca', '')))
    # Fim do bloco (mensagens de erro)

    # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        # Chama a função para gravar os dados em um arquivo, caso não tenha mensagens de erro
        gravar_em_arquivo(dados_processados)
        # gravar_dados(dados_gravacao)
        print(dados_gravacao)
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

    mensagens_erro = []  # Cria uma lista vazia para armazenar mensagens de erro

    # Início do bloco (mensagens de erro)
    # Os dados recebidos dos inputs serão validados pela função correspondente e caso haja erro será armazenado na variável mensagens_erro
    mensagens_erro.append(validar_email(
        dados_processados.get('email_log', '')))
    mensagens_erro.append(validar_senha(
        dados_processados.get('senha_log', '')))
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        # Chama a função para gravar os dados em um arquivo, caso não tenha mensagens de erro
        # gravar_em_arquivo_log(dados_processados)
        select_inf_log = verificar_informacao_log(dados_processados.get(
            'email_log', ''), dados_processados.get('senha_log', ''))
        print(select_inf_log)
        return (select_inf_log)

        # Retorna os dados processados
        # return {'erro': False, 'mensagem': 'Dados Processados com Sucesso!'}

def excluir_todas_informacoes_usuario(cad_id):
    try:
        # Chama a função para excluir o usuário do banco de dados
        deletar_cad(cad_id)
        
        # Retorna uma mensagem de sucesso
        return {'erro': False, 'mensagem': 'Todas as informações do usuário foram excluídas com sucesso.'}
    except Exception as e:
        # Se ocorrer algum erro durante a exclusão, retorna uma mensagem de erro
        return {'erro': True, 'mensagem': 'Erro ao excluir todas as informações do usuário: {}'.format(str(e))}
