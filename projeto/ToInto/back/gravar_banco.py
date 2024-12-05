# Nome do componente: gravar_banco.py
# Autor: Maria Luiza 
# Data alteração: 03/12/2024
# Descrição detalhada: Este código realiza exclusões nas tabelas de cadastro e compromissos, deletando a conta do usuário e os compromissos criados por ele.

import conexao
import datetime

# Função que grava os dados de cadastro no banco de dados.
def gravar_dados(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()
    vemail = [dados_gravacao[1]] # Obtém o e-mail dos dados fornecidos.
    print('vemail: ', vemail)

    # Verifica se o e-mail já está cadastrado.
    sql = "SELECT ID_CAD FROM CADASTRO WHERE EMAIL = %s limit 1"
     #val = (nome, email, senha)
    cursor.execute(sql, vemail)
    check = cursor.fetchone()
    print('valida gravado: ', check)

    if check == None:
    # Caso o e-mail não esteja cadastrado, insere um novo registro na tabela de cadastro.
        sql = "INSERT INTO cadastro (NOME_USUARIO, EMAIL, SENHA) VALUES (%s, %s, %s)"
        nome, email, senha, opc = dados_gravacao
        val = (nome, email, senha)
        cursor.execute(sql, val)
        conex.commit()
        
    else:
        # Retorna erro se o e-mail já estiver cadastrado.
        return {'erro': True, 'mensagem': 'Usuário já cadastrado'}
    print("Dados criados no formulário de cadastro", dados_gravacao)

    # Verifica se o plano é gratuito e grava os dados correspondentes.
    if opc == 1:
        #nome, email, senha = dados_gravacao
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        val = (nome, email, senha)
        cursor.execute(sql, val)
        id = cursor.fetchone()
        print(id)
	
        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('3', NULL , %s, 'Comprou o Plano Grátis', 0.00)"

        teste = cursor.execute(sql, id)
        
        print(teste)
        conex.commit()
        id = id[0]

    else: 
        # Obtém o ID do cadastro para ser usado posteriormente
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        val = (nome, email, senha)
        cursor.execute(sql, val)
        id = cursor.fetchone()
        print(id)
        id = id[0]

    conex.close()
    return  {'erro': False, 'mensagem': [id, opc, nome, email]}

# Função que grava os dados de pagamento no banco de dados.
def gravar_dados_cartao(dados_gravacao):
    # Converte dicionário em lista, se necessário
    if isinstance(dados_gravacao, dict):
        dados_gravacao = [
            dados_gravacao.get('escolha_pag'),
            dados_gravacao.get('plano_esc'),  # Ajuste conforme necessário
            dados_gravacao.get('id'),
            None,
            None,
            None,
            None,
            None,
            None,
            dados_gravacao.get('codigo')
        ]

    conex = conexao.conectar()
    cursor = conex.cursor()
    print(dados_gravacao)

    escolha_pag = dados_gravacao[0]
    plano = dados_gravacao[1]
    print('plano que esta chegando no cartão', plano)
    dados_receb =  dados_gravacao[2], dados_gravacao[3], dados_gravacao[4], dados_gravacao[5], dados_gravacao[6], dados_gravacao[7], dados_gravacao[8]
    print('Print teste atual', dados_receb)
    print('ABCD:', dados_gravacao[3], dados_gravacao[5], dados_gravacao[7])
    if escolha_pag == '2':
        # Insere os dados de pagamento para cartão de crédito.
        sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG, NUM_CARTAO, CVV, DATA_VENC, NOME_CARTAO) VALUES ('2', %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, dados_receb)
        print("Dados do Cartão inseridos com sucesso!") 
        conex.commit()
    
    else: 
        # Insere os dados de pagamento para PIX.
        data_atual = datetime.datetime.now()
        data_formatada = data_atual.strftime("%Y/%m/%d")
        sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, DATA_PAG, CHAVE_PIX) VALUES ('1', %s, %s, %s)"
        val = (dados_gravacao[2], data_formatada, dados_gravacao[9])
        cursor.execute(sql, val)
        conex.commit()
        print("Dados do Pix inseridos com sucesso!") 
    
    # Processa a compra com base no plano escolhido.
    # Se o plano for mensal, cairá nessa condição.
    if plano == '2': 
        # Se a escolha for cartão de crédito, cairá nesse comando de recuperação do ID de dados de pagamento pelo CPF e número de cartão, para depois ser realizado o insert na tabela compras 
        if escolha_pag == '2':
            sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CPF = %s AND NUM_CARTAO = %s order by ID_DADOS_PAG desc limit 1"
            val_dados_pag = (dados_gravacao[3], dados_gravacao[5])  # Preenchendo com os valores corretos
            cursor.execute(sql, val_dados_pag)
            id_dados_pag = cursor.fetchone()
            print(id_dados_pag) 

            sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('2', %s , %s, 'Comprou o Plano Mensal', 7.90)"
            val_insert = (id_dados_pag[0], dados_gravacao[2])  # Passando os IDs corretos
            teste = cursor.execute(sql, val_insert)

            print(teste)
            print("Compra mensal inserida com sucesso")
            conex.commit()

        # Cairá nesse comando se a escolha de pagamento for pix, recuperando o ID de dados de pagamento, para depois ser realizado o insert na tabela compras 
        else:
            sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CHAVE_PIX = %s order by ID_DADOS_PAG desc limit 1"
            val_dados_pag = (dados_gravacao[9],)  # Preenchendo com os valores corretos
            cursor.execute(sql, val_dados_pag)
            id_dados_pag = cursor.fetchone()
            print(id_dados_pag) 

            sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('2', %s , %s, 'Comprou o Plano Mensal', 7.90)"
            val_insert = (id_dados_pag[0], dados_gravacao[2])  # Passando os IDs corretos
            teste = cursor.execute(sql, val_insert)

            print(teste)
            print("Compra mensal inserida com sucesso")
            conex.commit()

     # Se o plano for anual, cairá nessa condição, que fará os mesmos comandos que a condição de cima para realizar o insert na tabela compras.
    else: 
        if escolha_pag == "2":
            sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CPF = %s AND NUM_CARTAO = %s order by ID_DADOS_PAG desc limit 1"
            val_dados_pag = (dados_gravacao[3], dados_gravacao[5])  # Preenchendo com os valores corretos
            cursor.execute(sql, val_dados_pag)
            id_dados_pag = cursor.fetchone()

            sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('1', %s , %s, 'Comprou o Plano Anual', 109.90)"
            val_insert = (id_dados_pag[0], dados_gravacao[2])  # Passando os IDs corretos
            teste = cursor.execute(sql, val_insert)

            print('tendando o teste', teste)
            print("Compra do anual inserida com sucesso")
            conex.commit() 

        else:
            sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CHAVE_PIX = %s order by ID_DADOS_PAG desc limit 1"
            val_dados_pag = (dados_gravacao[9],)  # Preenchendo com os valores corretos
            cursor.execute(sql, val_dados_pag)
            id_dados_pag = cursor.fetchone()

            sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('1', %s , %s, 'Comprou o Plano Anual', 109.90)"
            val_insert = (id_dados_pag[0], dados_gravacao[2])  # Passando os IDs corretos
            teste = cursor.execute(sql, val_insert)

            print('tendando o teste', teste)
            print("Compra do anual inserida com sucesso")
            conex.commit()

    conex.close()
    return  {'erro': False, 'mensagem': 'Dados do cartão realizados com sucesso'}

# Função que grava dados de compromissos com base no plano do usuário.
def gravar_dados_compromisso(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()
    plano_esc = dados_gravacao[7]
    print('PLANO ESCOLHIDO NO CADASTRO', type(plano_esc))
    
    try:
        # Validação do plano (Anual)
        # Plano anual: grava compromissos sem limites diários.
        if plano_esc == '1': 
            sql = "INSERT INTO compromissos (ID_CAD, TITULO_COMP, DATA_COMP, HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, tuple(dados_gravacao[:7]))  # Passando os valores como uma tupla
            conex.commit()
            print("Dados do compromisso inseridos com sucesso!")
        
        # Validação do plano (Mensal)
        # Plano mensal: limita compromissos a 100 por dia.
        elif plano_esc == '2':
            data_atual = datetime.datetime.now()
            data_formatada = data_atual.strftime("%Y/%m/%d")
            sql = "SELECT count(*) FROM COMPROMISSOS WHERE ID_CAD = %s and DATA_CRIACAO = %s"
            val = (dados_gravacao[0], data_formatada)
            cursor.execute(sql, val)
            tarefas = cursor.fetchone()
            print('DADOS DA TAREFA DO MENSAL', tarefas)

            if tarefas[0] < 101:
                sql = "INSERT INTO compromissos (ID_CAD, TITULO_COMP, DATA_COMP, HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE) VALUES (%s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(sql, tuple(dados_gravacao[:7]))  # Passando os valores como uma tupla
                conex.commit()
                print('Tarefas do plano mensal criadas')
            else: 
                return {'erro': True, 'mensagens': [{'limite': 'Você chegou ao seu limite de tarefas diárias para o plano mensal.'}]}
            
            
        # Validação do plano (Grátis)
        # Plano grátis: limita compromissos a 7 por dia.
        else:
            data_atual = datetime.datetime.now()
            data_formatada = data_atual.strftime("%Y/%m/%d")
            sql = "SELECT count(*) FROM COMPROMISSOS WHERE ID_CAD = %s and DATA_CRIACAO = %s"
            val = (dados_gravacao[0], data_formatada)
            cursor.execute(sql, val)
            tarefas = cursor.fetchone()
            total = tarefas[0]
            print('DADOS DA TAREFA', total)

            if total < 7:
                sql = "INSERT INTO compromissos (ID_CAD, TITULO_COMP, DATA_COMP, HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE) VALUES (%s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(sql, tuple(dados_gravacao[:7]))  # Passando os valores como uma tupla
                conex.commit()
                print('Tarefas do plano grátis criadas')
            else: 
                return {'erro': True, 'mensagens': [{'limite': 'Você chegou ao seu limite de tarefas diárias para o plano grátis.'}]}

    except Exception as e:
        return {'erro': True, 'mensagens': [{'erro': str(e)}]}

    finally:
        conex.close()
    
    return {'erro': False, 'mensagem': 'Tarefas criadas com sucesso!'}