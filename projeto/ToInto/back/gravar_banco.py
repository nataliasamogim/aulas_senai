import conexao

def gravar_dados(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()
    escolha_pag = dados_gravacao[0]
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

    elif opc == 2 and escolha_pag == '2':
        
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        cursor.execute(sql, val)
        id = cursor.fetchone()
        print(id) 

        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('2', NULL , %s, 'Comprou o Plano Mensal', 7.90)"
        
        teste = cursor.execute(sql, id)

        print(teste)
        conex.commit()  
        id = id[0]

    else:
        sql = "SELECT ID_CAD FROM CADASTRO WHERE NOME_USUARIO = %s AND EMAIL = %s AND SENHA = %s"
        cursor.execute(sql, val)
        id = cursor.fetchone()
        print(id) 

        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('1', %s , %s, 'Comprou o Plano Anual', 109.90)"
        
        teste = cursor.execute(sql, id)

        print(teste)
        conex.commit()  
        id = id[0] 

    print("Dados do cadastro inseridos com sucesso!") 
    conex.close()
    return  {'erro': False, 'mensagem': id}

def gravar_dados_cartao(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()
    print(dados_gravacao)

    escolha_pag = dados_gravacao[0]

    if escolha_pag == '2':
        sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG, NUM_CARTAO, CVV, DATA_VENC, NOME_CARTAO) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, dados_gravacao)
        print("Dados do Cartão inseridos com sucesso!") 
        conex.commit()
    
    else: 
        sql = "INSERT INTO dados_pag (TIPO_PAG, ID_CAD, CPF, DATA_PAG) VALUES ('1', %s, %s, %s, %s)"
        cursor.execute(sql, dados_gravacao)
        conex.commit()
        print("Dados do Pix inseridos com sucesso!") 
        conex.close()

def gravar_dados_compromisso(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "INSERT INTO compromissos (ID_CAD, TITULO_COMP, DATA_COMP, HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE) VALUES (%s, %s, %s, %s, %s, %s, %s)"

    cursor.execute(sql, dados_gravacao)
    conex.commit()
    print("Dados do compromisso inseridos com sucesso!") 
    conex.close()
