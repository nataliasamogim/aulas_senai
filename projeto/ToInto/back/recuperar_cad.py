import conexao


def recuperar_inf_formani(id_cad):

    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT NOME_USUARIO, EMAIL FOTO_PERFIL FROM CADASTRO WHERE ID_CAD = %s"
    val = (id_cad,)
    cursor.execute(sql, val)
    usuario = cursor.fetchone()
    conex.close()
    print(usuario)
    return usuario

    # if usuario:
    # print("Usuário encontrado:")
    # print(usuario)
    # novonome = input("Digite um novo nome:")
    # novoemail = input("Digite um novo email:")
    # novasenha = input("Digite uma nova senha:")
    # modificar_usuario(usuario[0], novonome, novoemail, novasenha, usuario[4])

    # deletar_cad(usuario[0])
    # return usuario
    # else:
    # print("Usuario não encontrado")
    # return None


def verificar_informacao_log(email, senha):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, NOME_USUARIO, EMAIL FROM CADASTRO WHERE EMAIL = %s AND SENHA = %s"
    val = (email, senha)
    cursor.execute(sql, val)
    login = cursor.fetchone()
    conex.close()

    if login:
        print("Usuário encontrado!")
        print(login)
        return {'erro': False, 'mensagem': login}

    else:
        print("Usuario não encontrado")
        return {'erro': True, 'mensagens':{'erro': True, 'mensagem': 'Usuário não encontrado'}}


