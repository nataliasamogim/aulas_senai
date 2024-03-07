import conexao
def selecionar_informacao_cad():
    id_cad = int(input("Digite o ID do cadastro que deseja selecionar:"))

    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT  FROM CADASTRO WHERE ID_CAD = %s"
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