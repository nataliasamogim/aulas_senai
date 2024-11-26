import conexao


def recuperar_inf_formani(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, NOME_USUARIO, EMAIL, FOTO_PERFIL FROM CADASTRO WHERE ID_CAD = %s"
    val = (id_cad,)
    cursor.execute(sql, val)
    usuario = cursor.fetchone()
    #print('select de usuário', usuario)
    conex.close()
    
    if usuario:
        # Extrair os dados do usuário
        id_cad, nome_usuario, email, foto_perfil = usuario
        
        # Converter a foto para Base64, se existir
        foto_base64 = foto_perfil.decode('utf-8') if foto_perfil else None
        #foto_base64 = foto_perfil
        print('foto',foto_base64)

        # Montar o dicionário de retorno
        dados_usuario = {
            'id': id_cad,
            'nome': nome_usuario,
            'email': email,
            'foto_perfil': foto_base64
        }

        print('teste de recebimento dos dados do usuário', dados_usuario)
        return {'erro': False, 'mensagem': dados_usuario}

    else:
        return {'erro': True, 'mensagens': {'erro': True, 'mensagem': 'Usuário não encontrado'}}


def verificar_informacao_log(email, senha):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = """SELECT compras.id_compra, cadastro.ID_CAD, NOME_USUARIO, EMAIL, compras.ID_PLANO as plano FROM CADASTRO JOIN compras ON cadastro.id_cad = compras.id_cad WHERE cadastro.EMAIL = %s AND cadastro.SENHA = %s order by compras.id_compra DESC limit 1;"""
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



    
    


