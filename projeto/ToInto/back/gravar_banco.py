import conexao
import datetime

def gravar_dados(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()
    vemail = [dados_gravacao[1]]
    print('vemail: ', vemail)
    sql = "SELECT ID_CAD FROM CADASTRO WHERE EMAIL = %s limit 1"
     #val = (nome, email, senha)
    cursor.execute(sql, vemail)
    check = cursor.fetchone()
    print('valida gravado: ', check)

    if check == None:

        sql = "INSERT INTO cadastro (NOME_USUARIO, EMAIL, SENHA) VALUES (%s, %s, %s)"
        nome, email, senha, opc = dados_gravacao
        val = (nome, email, senha)
        cursor.execute(sql, val)
        conex.commit()
        
    else:
        return {'erro': True, 'mensagem': 'Usuário já cadastrado'}
    print("Dados criados no formulário de cadastro", dados_gravacao)
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
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        val = (nome, email, senha)
        cursor.execute(sql, val)
        id = cursor.fetchone()
        print(id)
        id = id[0]

    conex.close()
    return  {'erro': False, 'mensagem': [id, opc, nome, email]}

def gravar_dados_cartao(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()
    print(dados_gravacao)

    escolha_pag = dados_gravacao[0]
    plano = dados_gravacao[1]
    print('plano que esta chegando no cartão', plano)
    dados_receb = dados_gravacao[0], dados_gravacao[2], dados_gravacao[3], dados_gravacao[4], dados_gravacao[5], dados_gravacao[6], dados_gravacao[7], dados_gravacao[8]

    if escolha_pag == '2':
        sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG, NUM_CARTAO, CVV, DATA_VENC, NOME_CARTAO) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, dados_receb)
        print("Dados do Cartão inseridos com sucesso!") 
        conex.commit()
    
    else: 
        sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG) VALUES ('1', %s, %s, %s)"
        cursor.execute(sql, dados_gravacao)
        conex.commit()
        print("Dados do Pix inseridos com sucesso!") 
    
    if plano == '2':  

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

    else: 

        sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CPF = %s AND NUM_CARTAO = %s order by ID_DADOS_PAG desc limit 1"
        val_dados_pag = (dados_gravacao[3], dados_gravacao[5])  # Preenchendo com os valores corretos
        cursor.execute(sql, val_dados_pag)
        id_dados_pag = cursor.fetchone()
        print(id_dados_pag)

        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('1', %s , %s, 'Comprou o Plano Anual', 109.90)"
        val_insert = (id_dados_pag[0], dados_gravacao[2])  # Passando os IDs corretos
        teste = cursor.execute(sql, val_insert)

        print('tendando o teste', teste)
        print("Compra do anual inserida com sucesso")
        conex.commit()  

    conex.close()
    return  {'erro': False, 'mensagem': 'Dados do cartão realizados com sucesso'}

def gravar_dados_compromisso(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()
    plano_esc = dados_gravacao[7]
    print('PLANO ESCOLHIDO NO CADASTRO', type(plano_esc))
    
    # Anual
    if plano_esc == '1': 
        sql = "INSERT INTO compromissos (ID_CAD, TITULO_COMP, DATA_COMP, HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, tuple(dados_gravacao[:7]))  # Passando os valores como uma tupla
        conex.commit()
        print("Dados do compromisso inseridos com sucesso!")

    elif plano_esc == '2':
        data_atual = datetime.datetime.now()
        data_formatada = data_atual.strftime("%Y/%m/%d")
        sql = "SELECT count(*) FROM COMPROMISSOS WHERE ID_CAD = %s and DATA_CRIACAO = %s"
        val = (dados_gravacao[0], data_formatada)
        cursor.execute(sql, val)
        tarefas = cursor.fetchone()
        print('DADOS DA TAREFA DO MENSAL', tarefas)

        # Mensal
        if (tarefas[0] < 101):
            sql = "INSERT INTO compromissos (ID_CAD, TITULO_COMP, DATA_COMP, HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, tuple(dados_gravacao[:7]))  # Passando os valores como uma tupla
            conex.commit()
            print('Tarefas do plano mensal criadas')

        else: 
            return  {'erro': False, 'mensagem': 'Você chegou ao seu limite de tarefas diárias'}
    
    else:
        data_atual = datetime.datetime.now()
        data_formatada = data_atual.strftime("%Y/%m/%d")
        sql = "SELECT count(*) FROM COMPROMISSOS WHERE ID_CAD = %s and DATA_CRIACAO = %s"
        val = (dados_gravacao[0], data_formatada)
        cursor.execute(sql, val)
        tarefas = cursor.fetchone()
        print('DADOS DA TAREFA', tarefas)
        # Grátis
        if (tarefas[0] < 8):
            sql = "INSERT INTO compromissos (ID_CAD, TITULO_COMP, DATA_COMP, HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, tuple(dados_gravacao[:7]))  # Passando os valores como uma tupla
            conex.commit()
            print('Tarefas do plano grátis criadas')
        
        else: 
            return  {'erro': False, 'mensagem': 'Você chegou ao seu limite de tarefas diárias'}

    conex.close()
    return  {'erro': False, 'mensagem': 'Tarefas criadas com sucesso!'}
