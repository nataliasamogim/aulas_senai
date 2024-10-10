import conexao


def recuperar_inf_formani(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, NOME_USUARIO, EMAIL FROM CADASTRO WHERE ID_CAD = %s"
    val = (id_cad,)
    cursor.execute(sql, val)
    usuario = cursor.fetchone()
    conex.close()

    if usuario:
        print('teste de recebimento dos dados do usuário', usuario)
        return {'erro': False, 'mensagem': usuario}

    else:
        return {'erro': True, 'mensagens':{'erro': True, 'mensagem': 'Usuário não encontrado'}}


def verificar_informacao_log(email, senha):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = """
    SELECT cadastro.ID_CAD, NOME_USUARIO, EMAIL, max(compras.ID_PLANO) as plano 
    FROM CADASTRO 
    JOIN compras ON cadastro.id_cad = compras.id_cad 
    WHERE cadastro.EMAIL = %s AND cadastro.SENHA = %s
    """
    val = (email, senha)
    cursor.execute(sql, val)
    login = cursor.fetchone()

    print(f"Resultado da consulta: {login}")  # Verificar o valor retornado

    conex.close()

    # Verificar se a tupla contém apenas valores None
    if login and any(login):  # Verifica se ao menos um valor não é None
        print('Login recuperado:', login)
        return {'erro': False, 'mensagem': login}
    else:
        print("Usuário não encontrado")
        return {'erro': True, 'mensagens': {'erro': True, 'mensagem': 'Usuário não encontrado'}}



    
    


