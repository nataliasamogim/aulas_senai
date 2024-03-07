import conexao
def selecionar_informacao_cad():
    id_cad = int(input("Digite o ID do cadastro que deseja selecionar:"))

    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, NOME_USUARIO, EMAIL, SENHA, FOTO_PERFIL FROM CADASTRO WHERE ID_CAD = %s"
    val = (id_cad,)
    cursor.execute(sql, val)
    usuario = cursor.fetchone()
    conex.close()

    if usuario:
        print("Usuário encontrado:")
        print(usuario)
        return usuario
    else:
        print("Usuario não encontrado")  
        return None
    
if __name__ == "__main__":
    selecionar_informacao_cad()

import conexao
def verificar_informacao_log():
    id_cad = int(input("Digite o ID do cadastro que deseja selecionar:"))

    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT EMAIL, SENHA FROM CADASTRO WHERE ID_CAD = %s"
    val = (id_cad,)
    cursor.execute(sql, val)
    login = cursor.fetchone()
    conex.close()

    if login:
        print("Usuário encontrado:")
        print(login)
        return login
    else:
        print("Usuario não encontrado")  
        return None
    
if __name__ == "__main__":
    selecionar_informacao_log()