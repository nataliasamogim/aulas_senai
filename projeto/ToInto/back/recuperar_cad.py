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
        print('Usuario Laura')
        return {'erro': False, 'mensagem': usuario}

    else:
        return {'erro': True, 'mensagens':{'erro': True, 'mensagem': 'Usuário não encontrado'}}


def verificar_informacao_log(email, senha):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, NOME_USUARIO, EMAIL FROM CADASTRO WHERE EMAIL = %s AND SENHA = %s"
    val = (email, senha)
    cursor.execute(sql, val)
    login = cursor.fetchone()
    conex.close()

    if login:
        return {'erro': False, 'mensagem': login}

    else:
        print("Usuario não encontrado")
        return {'erro': True, 'mensagens':{'erro': True, 'mensagem': 'Usuário não encontrado'}}
    
    


