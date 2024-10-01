# Nome do componente: processamento.py
# Autor: Maria Luiza
# Data de criação/alteração: 01-12-2023
# Descrição detalhada: Nesse componente processamos os dados recebidos do formulário e printamos eles no terminal.
# Além de armazenar as mensagens de erro recebidas do componete validacoes em uma lista chamada mesagens_erro.
from gravar_banco import gravar_dados, gravar_dados_compromisso, gravar_dados_cartao
from recuperar_cad import verificar_informacao_log
from recuperar_cad import recuperar_inf_formani
from recuperar_cart import recuperar_inf_cart
from recuperar_comp import recuperar_inf_comp
from update_banco import atualizar_cad, atualizar_compromisso
from update_banco import atualizar_cart
from delete_banco import deletar_cad
from delete_banco import deletar_compromisso
from tratar_hora import data
from consulta_data import consultar_tarefas_por_usuario

from validacoes import (
    validar_nome,
    validar_email,
    validar_emailVazio,
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

from validar_compromissos import (
    validar_titulo,
    validar_descricao

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
    if dados.get('acao') == 'salvar_cad': 
        print('Cadastro')                                
        retorno = processar_dados_cad(dados)
    elif dados.get('acao') == 'salvar_compromisso':
        print('Compromissos')
        retorno = processar_dados_compromisso(dados)
    elif dados.get('acao') == 'salvar_log':
        print('Login')
        retorno = processar_dados_log(dados)
    elif dados.get('acao') == 'atualizar_cad':
        print('atualizar')
        retorno = processar_alterar_cad(dados)
    elif dados.get('acao') == 'salvar_cart':
        print ('Dados Cartao')
        retorno = processar_dados_cartao(dados)
    elif dados.get('acao') == 'recuperar_cart':
        retorno = recuperar_inf_cart(dados.get('id_cadastro', ''))
    elif dados.get('acao') == 'recuperar_comp':
        retorno = recuperar_inf_comp(dados.get('id_cad', ''), dados.get('data_comp', ''))
    elif dados.get('acao') == 'atualizar_cart':
        print ('Atualizar dados do cartão')
        retorno = processar_alterar_cart(dados)
    elif dados.get('acao') == 'atualizar_plano':
        retorno = processar_dados_cartao(dados)
    elif dados.get('acao') == 'selecionar_cart':
        retorno = recuperar_inf_cart(dados.get('id_cadastro', ''))
    elif dados.get('acao') == 'atualizar_comp':
        retorno = processar_alterar_comp(dados)
    elif dados.get('acao') == 'deletar_comp':
        retorno = deletar_compromisso(dados.get('id_comp', ''))
    elif dados.get('acao') == 'deletar_cad':
        retorno = excluir_todas_informacoes_usuario(dados.get('id_cad'))
    elif dados.get('acao') == 'selecionar_cad':
        #print('processar select', dados)
        retorno = recuperar_inf_formani(dados.get('id', ''))
    elif dados.get('acao') == 'consulta_data':
        retorno = consultar_data(dados)
    else:
        retorno = processar_dados_log(dados)
    
    return (retorno)
        
#-------------------------------------------------------------------------

# Processamento do Desktop -----------------------------------------------------
'''
        if dados.get('nome') != None:
            retorno = processar_dados_cad(dados)
        elif dados.get('nome_titular') != None:
            retorno = processar_dados_cartao(dados)
        elif dados.get('id_cad') != None and dados.get('funcao') == 'del':
            #print('processar', dados)
            retorno = excluir_todas_informacoes_usuario(dados.get('id_cad'))
            #retorno ='retorno delete'
        elif dados.get('id') != None and dados.get('funcao') != 'del':
            #print('processar select', dados)
            retorno = recuperar_inf_formani(dados.get('id', ''))
        elif dados.get('nome_novo') != None:
            retorno = processar_alterar_cad(dados)
        elif dados.get('titulo') != None:
            retorno = processar_dados_compromisso(dados)
'''

    


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
    dados_gravacao.append(dados_processados.get('planos'))

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

    #print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        # Chama a função para gravar os dados em um arquivo, caso não tenha mensagens de erro
        #gravar_em_arquivo(dados_processados)
        retorno=gravar_dados(dados_gravacao)
        if (retorno['erro']):
            print(retorno)
        # Retorna os dados processados=
            mensagens_erro.append(retorno)
            return {'erro': True, 'mensagens': mensagens_erro}
        else:
            return {'erro': False, 'mensagens': retorno}

def processar_alterar_cad(dados):
    # Função para processar os dados recebidos do Flask
    # Retorna os dados processados
    dados_processados = dados

    update_dados = []

    update_dados.append(dados_processados.get('nome_novo'))
    update_dados.append(dados_processados.get('email_novo'))
    update_dados.append(dados_processados.get('senha_nova'))
    update_dados.append(dados_processados.get('foto', ''))
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
    #idcad = dados_processados.get('id')
    #dados_gravacao.append(idcad[1:3])
    dados_gravacao.append(dados_processados.get('escolha_pag'))
    dados_gravacao.append(dados_processados.get('plano_esc'))
    dados_gravacao.append(dados_processados.get('id'))
    dados_gravacao.append(dados_processados.get('cpf'))
    dados_gravacao.append(data())
    dados_gravacao.append(dados_processados.get('num_cartao'))
    dados_gravacao.append(dados_processados.get('cod_seguranca'))
    dados_gravacao.append(dados_processados.get('datavenc'))
    dados_gravacao.append(dados_processados.get('nome_titular'))
    
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
        retorno = gravar_dados_cartao(dados_gravacao)
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
    mensagens_erro.append(validar_emailVazio(
        dados_processados.get('email_log', '')))
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
    

def processar_dados_compromisso(dados):
    dados_processados = dados
    dados_gravacao = []
    dados_gravacao.append(dados_processados.get('id_cad'))
    dados_gravacao.append(dados_processados.get('titulo'))
    dados_gravacao.append(dados_processados.get('date'))
    dados_gravacao.append(dados_processados.get('time'))
    dados_gravacao.append(dados_processados.get('descricao'))
    dados_gravacao.append(dados_processados.get('importante'))
    dados_gravacao.append(dados_processados.get('lembrete'))
    dados_gravacao.append(dados_processados.get('plano_esc'))

    mensagens_erro = []  # Cria uma lista vazia para armazenar mensagens de erro

    # Início do bloco (mensagens de erro)
    # Os dados recebidos dos inputs serão validados pela função correspondente e caso haja erro será armazenado na variável mensagens_erro
    mensagens_erro.append(validar_titulo(dados.get('titulo', '')))
    mensagens_erro.append(validar_descricao(dados.get('descricao', '')))
    # Fim do bloco (mensagens de erro)

    # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        # Chama a função para gravar os dados, caso não tenha mensagens de erro
        gravar_dados_compromisso(dados_gravacao)
        print('dados de gravação', dados_gravacao)
        return {'erro': False, 'mensagem': 'Dados do compromissos criados com sucesso'}
    
def processar_alterar_comp(dados):
    print ('processamento', dados)
    dados_processados = dados
    dados_gravacao = []
    dados_gravacao.append(dados_processados.get('id_cad'))
    dados_gravacao.append(dados_processados.get('id_tarefa'))
    dados_gravacao.append(dados_processados.get('titulo'))
    dados_gravacao.append(dados_processados.get('date'))
    dados_gravacao.append(dados_processados.get('time'))
    dados_gravacao.append(dados_processados.get('descricao'))
    dados_gravacao.append(dados_processados.get('importante'))
    dados_gravacao.append(dados_processados.get('lembrete'))

    mensagens_erro = []  # Cria uma lista vazia para armazenar mensagens de erro

    # Início do bloco (mensagens de erro)
    # Os dados recebidos dos inputs serão validados pela função correspondente e caso haja erro será armazenado na variável mensagens_erro
    mensagens_erro.append(validar_titulo(dados.get('titulo', '')))
    mensagens_erro.append(validar_descricao(dados.get('descricao', '')))
    # Fim do bloco (mensagens de erro)

    # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        # Chama a função para gravar os dados em um arquivo, caso não tenha mensagens de erro
        #gravar_em_arquivo(dados_processados)
        atualizar_compromisso(dados_gravacao)
        print(dados_gravacao)
        # Retorna os dados processados
        return {'erro': False, 'mensagem': 'Dados do compromissos criados com sucesso'}
    

def processar_alterar_cart(dados):
    # Função para processar os dados recebidos do Flask
    # Retorna os dados processados
    dados_processados = dados

    update_dadosCart = []

    update_dadosCart.append(dados_processados.get('novo_Cpf'))
    update_dadosCart.append(dados_processados.get('novo_numCartao'))
    update_dadosCart.append(dados_processados.get('novo_cvv'))
    update_dadosCart.append(dados_processados.get('nova_dataVenc'))
    update_dadosCart.append(dados_processados.get('novo_nomeTitular'))
    # Adicione o ID do usuário
    update_dadosCart.append(dados_processados.get('id'))

    print(update_dadosCart)

    mensagens_erro = []  # Cria uma lista vazia para armazenar mensagens de erro

    # Início do bloco (mensagens de erro)
    # Os dados recebidos dos inputs serão validados pela função correspondente e caso haja erro será armazenado na variável mensagens_erro
    mensagens_erro.append(validar_nome_titular(
        dados_processados.get('novo_nomeTitular', '')))  # Valida o novo nome do titular
    mensagens_erro.append(validar_cpf(
        dados_processados.get('novo_Cpf', '')))  # Valida o novo cpf
    mensagens_erro.append(validar_num_cartao(
        dados_processados.get('novo_numCartao', '')))  # Valida o novo número do cartão
    # Precisa ser dois parâmetros já que no componete validacoes colocamos dois parâmetros na função corfimar_senha
    mensagens_erro.append(validar_codseg(
        dados_processados.get('novo_cvv', '')))  # Valida o novo cvv
    # Fim do bloco (mensagens de erro)
    mensagens_erro.append(validar_datavenc(
        dados_processados.get('nova_dataVenc', '')))  # Valida a nova data de vencimento
    # Fim do bloco (mensagens de erro)
    mensagens_erro.append(validar_nome_titular(
        dados_processados.get('novo_nomeTitular', '')))  # Valida o novo nome do titular
    # Fim do bloco (mensagens de erro)

    # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        alterar_cart = atualizar_cart(update_dadosCart)
        print('teste', alterar_cart)
        return {'erro': False, 'mensagem': alterar_cart}
    


#Função para buscar data e marcar a bolinha amarela no calendário
def consultar_data(dados): 
    print('Dentro função consultar_data', dados)   
    user_id = dados.get('user_id')
    if user_id:
        resultado = consultar_tarefas_por_usuario(user_id)
        return resultado  
    else:
        return {'erro': True, 'mensagem': 'ID de usuário não fornecido'}
