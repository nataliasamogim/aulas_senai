# Nome do componente: processamento.py
# Autor: Maria Luiza
# Data de alteração: 05-12-2024
# Descrição detalhada: Nesse componente processamos os dados recebidos dos formulários, do calendário, do todolist e do perfil e printamos eles no terminal e retornamos a mensagem para o frontend.
# Além de armazenar as mensagens de erro recebidas do componete validacoes em uma lista chamada mesagens_erro.

# Importação de funções de módulos específicos
# Cada módulo parece ser responsável por uma parte do sistema, como banco de dados, validações e recuperação de informações
from gravar_banco import gravar_dados, gravar_dados_compromisso, gravar_dados_cartao
from recuperar_cad import verificar_informacao_log
from recuperar_cad import recuperar_inf_formani
from recuperar_cart import recuperar_inf_cart
from recuperar_comp import recuperar_inf_comp
from recuperar_comp import recuperar_inf_semana
from recuperar_comp import recuperar_inf_importante
from recuperar_comp import recuperar_lembrete
from update_banco import atualizar_cad, atualizar_compromisso, atualizar_estado_checkbox
from update_banco import atualizar_cart
from delete_banco import deletar_cad
from delete_banco import deletar_compromisso
from tratar_hora import data # Função para manipulação de datas
from consulta_data import consultar_tarefas_por_usuario
from select_dados_cartao import select_dados_cartao
from modificar_plano import gravar_dados_compra
from update_banco import atualizar_cad
from recuperar_cad_mob import recuperar_inf_altercad

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
# Data de alteração: 05-12-2024
# Parâmetros entrada:
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados e printados no terminal.
# 1° Retorno:
# Nome: retorna uma das funções, tipo: boleano, finalidade: retornar qual dos formulários está sendo preenchido.
# Descrição/observação: essa função analisa as ações recebidas do frontend e realiza a função/comando correspondente a ação

# Função principal para processar os dados recebidos
# Identifica a ação solicitada e delega o processamento para funções específicas
def processar_dados(dados):
    # Ação de salvar cadastro
    if dados.get('acao') == 'salvar_cad':                               
        retorno = processar_dados_cad(dados)

     # Ação de salvar compromisso
    elif dados.get('acao') == 'salvar_compromisso':
        retorno = processar_dados_compromisso(dados)

    elif dados.get('acao') == 'salvar_log':
        retorno = processar_dados_log(dados)

     # Ação de atualizar cadastro
    elif dados.get('acao') == 'atualizar_cad':
        retorno = processar_alterar_cad(dados)

    # Ação de salvar dados de cartão
    elif dados.get('acao') == 'salvar_cart':
        retorno = processar_dados_cartao(dados)

    # Ação de recuperar dados de cartão
    elif dados.get('acao') == 'recuperar_cart':
        retorno = recuperar_inf_cart(dados.get('id_cadastro', ''))

    # Recuperar compromissos de um usuário
    elif dados.get('acao') == 'recuperar_comp':
        retorno = recuperar_inf_comp(dados.get('id_cad', ''), dados.get('data_comp', ''))

    # Recuperar compromissos de uma semana
    elif dados.get('acao') == 'recuperar_semana':
            retorno = recuperar_inf_semana(dados.get('id_cad', ''), dados.get('data_in', ''), dados.get('data_fim', ''))

    # Recuperar compromissos marcados como importantes
    elif dados.get('acao') == 'recuperar_importante':
        retorno = recuperar_inf_importante(dados.get('id_cad', ''))

    # Recuperar lembretes do usuário
    elif dados.get('acao') == 'recuperar_lembrete':
        retorno = recuperar_lembrete(dados.get('id_cad', ''))

    # Atualizar informações do cartão
    elif dados.get('acao') == 'atualizar_cart':
        retorno = processar_alterar_cart(dados)

    # Atualizar o plano do usuário
    elif dados.get('acao') == 'atualizar_plano':
        retorno = processar_dados_cartao(dados)

    # Selecionar dados de um cartão
    elif dados.get('acao') == 'selecionar_cart':
        retorno = recuperar_inf_cart(dados.get('id_cadastro', ''))

    # Atualizar compromissos
    elif dados.get('acao') == 'atualizar_comp':
        retorno = processar_alterar_comp(dados)

     # Excluir compromisso
    elif dados.get('acao') == 'deletar_comp':
        retorno = deletar_compromisso(dados.get('id_comp', ''))

    # Excluir todas as informações de um usuário
    elif dados.get('acao') == 'deletar_cad':
        retorno = excluir_todas_informacoes_usuario(dados.get('id_cad'))

    # Selecionar informações de um usuário
    elif dados.get('acao') == 'selecionar_cad':
        retorno = recuperar_inf_formani(dados.get('id', ''))

    # Selecionar perfil do usuário
    elif dados.get('acao') == 'selecionar_perfil':
        retorno = recuperar_inf_formani(dados.get('id', ''))

    # Atualizar estado de um checkbox em um compromisso
    elif dados.get('acao') == 'atualizar_checkbox':
        retorno = atualizar_estado_checkbox(dados.get('id_comp', ''), dados.get('estado_checkbox', ''))

    # Consultar dados por data
    elif dados.get('acao') == 'consulta_data':
        retorno = consultar_data(dados)

    # Consultar dados do cartão antes de atualizar plano
    elif dados.get('acao') == 'atualizar_plano_mean':
        retorno = select_dados_cartao(dados.get('id_cad', ''))

    # Inserir dados ao atualizar plano
    elif dados.get('acao') == 'atualizar_plano_insert':
        retorno = gravar_dados_compra(dados.get('id_cad', ''), dados.get('id_dados_pag', ''), dados.get('plano_esc', ''))

     # Salvar dados de pagamento via PIX
    elif dados.get('acao') == 'salvar_pix':
        retorno = gravar_dados_cartao(dados)

    elif dados.get('acao') == 'selecionar_cad_mob':
        retorno = recuperar_inf_altercad(dados.get('id', ''))

     # Caso nenhuma ação seja identificada, processa como login
    else:
        retorno = processar_dados_log(dados)
    
    return (retorno)

#-------------------------------------------------------------------------------

# Nome da função: processar_dados_cad
# Data de alteração: 05-12-2024
# Parâmetros entrada:
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados, validados, retornados como mensagens para o frontend e também printados no terminal.
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao usuário qual o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga seu cadastro

def processar_dados_cad(dados):
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

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        retorno=gravar_dados(dados_gravacao)
        if (retorno['erro']):
            print(retorno)
            mensagens_erro.append(retorno)
            return {'erro': True, 'mensagens': mensagens_erro}
        else:
            return {'erro': False, 'mensagens': retorno}

# Nome da função: processar_alterar_cad
# Data de alteração: 05-12-2024
# Parâmetros entrada:
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados, validados, retornados como mensagens para o frontend e também printados no terminal.
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao usuário qual o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga sua alteração de cadastro
def processar_alterar_cad(dados):
    dados_processados = dados

    update_dados = []

    update_dados.append(dados_processados.get('nome_novo'))
    update_dados.append(dados_processados.get('email_novo'))
    update_dados.append(dados_processados.get('senha_nova'))
    update_dados.append(dados_processados.get('foto', ''))
    # Adicione o ID do usuário
    update_dados.append(dados_processados.get('id'))

    print("Dados para atualização:", update_dados)

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
        # Se não houver erros nas validações, chama atualizar_cad
        alterar_cad = atualizar_cad(update_dados)
        
        # Verifica se atualizar_cad retornou algum erro
        if alterar_cad.get('erro'):
            # Retorna as mensagens de erro vindas de atualizar_cad
            return {'erro': True, 'mensagens': alterar_cad['mensagens']}
        
        # Caso contrário, operação bem-sucedida
        print("Atualização bem-sucedida:", alterar_cad)
        return {'erro': False, 'mensagem': "Cadastro atualizado com sucesso"}
        

# Nome da função: processar_dados_cartao
# Data de alteração: 05-12-2024
# Parâmetros entrada:
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados, validados, retornados como mensagens para o frontend e também printados no terminal.
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao usuário qual o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga seu formulário de cartão
def processar_dados_cartao(dados):
    dados_processados = dados
    dados_gravacao = []
    dados_gravacao.append(dados_processados.get('escolha_pag'))
    dados_gravacao.append(dados_processados.get('plano_esc'))
    dados_gravacao.append(dados_processados.get('id'))
    dados_gravacao.append(dados_processados.get('cpf'))
    dados_gravacao.append(data())
    dados_gravacao.append(dados_processados.get('num_cartao'))
    dados_gravacao.append(dados_processados.get('cod_seguranca'))
    dados_gravacao.append(dados_processados.get('datavenc'))
    dados_gravacao.append(dados_processados.get('nome_titular'))
    dados_gravacao.append(dados_processados.get('codigo'))
    
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
        retorno = gravar_dados_cartao(dados_gravacao)
        return {'erro': False, 'mensagem': 'Dados Processados com Sucesso!'}

# Nome da função: processar_dados_log
# Data de alteração: 05-12-2024
# Parâmetros entrada: 
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados, comparados com as informações de cadastro que existe no banco de dados, retorna as mensagens para o frontend e printados no terminal
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao usuário qual o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga seu login
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
        select_inf_log = verificar_informacao_log(dados_processados.get(
            'email_log', ''), dados_processados.get('senha_log', ''))
        print(select_inf_log)
        return (select_inf_log)
    
# Nome da função: excluir_todas_informacoes_usuario
# Data de alteração: 05-12-2024
# Parâmetros entrada: 
# Nome: cad_id, tipo: string, finalidade: fornecer os dados para que eles sejam processados, deletados, e retorna as mensagens para o frontend e printa no terminal
# 1° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga sua exclusão de conta
# 2° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao frontend o erro.

def excluir_todas_informacoes_usuario(cad_id):
    try:
        # Chama a função para excluir o usuário do banco de dados
        deletar_cad(cad_id)
        
        # Retorna uma mensagem de sucesso
        return {'erro': False, 'mensagem': 'Todas as informações do usuário foram excluídas com sucesso.'}
    except Exception as e:
        # Se ocorrer algum erro durante a exclusão, retorna uma mensagem de erro
        return {'erro': True, 'mensagem': 'Erro ao excluir todas as informações do usuário: {}'.format(str(e))}
    
# Nome da função: processar_dados_compromisso
# Data de alteração: 05-12-2024
# Parâmetros entrada: 
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados, validados, e retorna as mensagens para o frontend e printa no terminal
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao frontend o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga sua criação de tarefa 
def processar_dados_compromisso(dados):
    dados_processados = dados
    dados_gravacao = [
        dados_processados.get('id_cad'),
        dados_processados.get('titulo'),
        dados_processados.get('date'),
        dados_processados.get('time'),
        dados_processados.get('descricao'),
        dados_processados.get('importante'),
        dados_processados.get('lembrete'),
        dados_processados.get('plano_esc')
    ]

    mensagens_erro = []  # Lista para armazenar mensagens de erro

    # Validação dos dados recebidos
    mensagens_erro.append(validar_titulo(dados.get('titulo', '')))
    mensagens_erro.append(validar_descricao(dados.get('descricao', '')))

    # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    # Se houver erros de validação, retorna os erros ao frontend
    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}

    # Chama a função para gravar os dados e captura a resposta
    resposta = gravar_dados_compromisso(dados_gravacao)

    # Verifica se houve erro ao gravar os dados
    if resposta['erro']:
        # Retorna o erro diretamente ao frontend
        return resposta

    # Caso contrário, retorna sucesso
    print('dados de gravação', dados_gravacao)
    return {'erro': False, 'mensagem': 'Dados do compromissos criados com sucesso!'}
    
# Nome da função: processar_alterar_comp
# Data de alteração: 05-12-2024
# Parâmetros entrada: 
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados, validados, e retorna as mensagens para o frontend e printa no terminal
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao frontend o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga sua alteração de tarefa
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
        atualizar_compromisso(dados_gravacao)
        print(dados_gravacao)
        return {'erro': False, 'mensagem': 'Dados do compromissos criados com sucesso'}
    

# Nome da função: processar_alterar_comp
# Data de alteração: 05-12-2024
# Parâmetros entrada: 
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados, validados, e retorna as mensagens para o frontend e printa no terminal
# 1° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao frontend o erro.
# 2° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que o usuário prossiga sua alteração de dados do cartão
def processar_alterar_cart(dados):
    dados_processados = dados

    update_dadosCart = []

    update_dadosCart.append(dados_processados.get('novo_Cpf'))
    update_dadosCart.append(dados_processados.get('novo_numCartao'))
    update_dadosCart.append(dados_processados.get('novo_cvv'))
    update_dadosCart.append(dados_processados.get('nova_dataVenc'))
    update_dadosCart.append(dados_processados.get('novo_nomeTitular'))
    # Adicione o ID do usuário
    update_dadosCart.append(dados_processados.get('id'))
    update_dadosCart.append(dados_processados.get('escolha_pag'))

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
    

# Nome da função: consultar_data
# Data de alteração: 05-12-2024
# Parâmetros entrada: 
# Nome: dados, tipo: string, finalidade: fornecer os dados para que eles sejam processados para buscar data e marcar a bolinha amarela no calendário e depois retorna uma mensagem para o frontend
# 1° Retorno:
# Nome: retorna a mensagem para o terminal e console, tipo: boleano, finalidade: permite que apareça a bolinha amarela no calendário
# 2° Retorno:
# Nome: retorna mensagem de erro, tipo: boleano, finalidade: retornar ao frontend o erro.

def consultar_data(dados): 
    print('Dentro função consultar_data', dados)   
    user_id = dados.get('user_id')
    if user_id:
        resultado = consultar_tarefas_por_usuario(user_id)
        return resultado  
    else:
        return {'erro': True, 'mensagem': 'ID de usuário não fornecido'}
