import conexao

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

        return {'erro': True, 'mensagem': 'usuario ja cadastrado'}

    if opc == 1:
        #nome, email, senha = dados_gravacao
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        #val = (nome, email, senha)
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
        #val = (nome, email, senha)
        cursor.execute(sql, val)
        id = cursor.fetchone()
        print(id)
        id = id[0]

    conex.close()
    return  {'erro': False, 'mensagem': [id, opc]}


    '''elif opc == 2:
        
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        cursor.execute(sql, val)
        id = cursor.fetchone()
        print(id) 

        escolha_pag = dados_gravacao[0]

        if escolha_pag == '2':
            sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG, NUM_CARTAO, CVV, DATA_VENC, NOME_CARTAO) VALUES ('2', %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, dados_gravacao)
            print("Dados do Cartão inseridos com sucesso!") 
            conex.commit()
    
        else: 
            sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG) VALUES ('1', %s, %s, %s)"
            cursor.execute(sql, dados_gravacao)
            conex.commit()
            print("Dados do Pix inseridos com sucesso!") 

        sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CPF = %s AND NUM_CARTAO = %s order by ID_DADOS_PAG desc limit 1"
        cursor.execute(sql, val)
        id_dados_pag = cursor.fetchone()
        print(id_dados_pag) 

        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('2', %s , %s, 'Comprou o Plano Mensal', 7.90)"
        
        teste = cursor.execute(sql, id)

        print(teste)
        conex.commit()  
        id = id[0]

    else:
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        cursor.execute(sql, val)
        id = cursor.fetchone()
        print(id) 

        gravar_dados_cartao(dados_gravacao) 

        sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CPF = %s AND NUM_CARTAO = %s order by ID_DADOS_PAG desc limit 1"
        cursor.execute(sql, val)
        id_dados_pag = cursor.fetchone()
        print(id_dados_pag) 

        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('1', %s , %s, 'Comprou o Plano Anual', 109.90)"
        
        teste = cursor.execute(sql, id)

        print(teste)
        conex.commit()  
        id = id[0] 

    print("Dados do cadastro inseridos com sucesso!") 
    conex.close()
    return  {'erro': False, 'mensagem': [id, opc]}'''

def gravar_dados_cartao(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()
    print(dados_gravacao)

    escolha_pag = dados_gravacao[0]
    print(escolha_pag)
    plano = dados_gravacao[1]
    print(escolha_pag)

    if escolha_pag == '2':
        sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG, NUM_CARTAO, CVV, DATA_VENC, NOME_CARTAO) VALUES ('2', %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, dados_gravacao)
        print("Dados do Cartão inseridos com sucesso!") 
        conex.commit()
    
    else: 
        sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG) VALUES ('1', %s, %s, %s)"
        cursor.execute(sql, dados_gravacao)
        conex.commit()
        print("Dados do Pix inseridos com sucesso!") 
    
    if plano == 2:
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        cursor.execute(sql,)
        id = cursor.fetchone()
        print(id)  

        sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CPF = %s AND NUM_CARTAO = %s order by ID_DADOS_PAG desc limit 1"
        cursor.execute(sql,)
        id_dados_pag = cursor.fetchone()
        print(id_dados_pag) 

        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('2', %s , %s, 'Comprou o Plano Mensal', 7,90)"
        
        teste = cursor.execute(sql, id)

        print(teste)
        conex.commit()  
        id = id[0]

    else: 
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        cursor.execute(sql,)
        id = cursor.fetchone()
        print(id) 

        sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE CPF = %s AND NUM_CARTAO = %s order by ID_DADOS_PAG desc limit 1"
        cursor.execute(sql,)
        id_dados_pag = cursor.fetchone()
        print(id_dados_pag) 

        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('1', %s , %s, 'Comprou o Plano Anual', 109.90)"
        
        teste = cursor.execute(sql, id)

        print(teste)
        conex.commit()  
        id = id[0] 

    conex.close()
    return  {'erro': False, 'mensagem': 'Dados do cartão realizados com sucesso'}

    

def gravar_dados_compromisso(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "INSERT INTO compromissos (ID_CAD, TITULO_COMP, DATA_COMP, HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE) VALUES (%s, %s, %s, %s, %s, %s, %s)"

    cursor.execute(sql, dados_gravacao)
    conex.commit()
    print("Dados do compromisso inseridos com sucesso!") 
    conex.close()
