import conexao

# Função para atualizar o nome de um autor
def  modificar_usuario(id_cad, novo_nome, novo_email, nova_senha, nova_fotoperfil):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE CADASTRO SET NOME_USUARIO = %s , EMAIL = %s , SENHA = %s , FOTO_PERFIL = %s WHERE ID_CAD = %s"

    val = ( novo_nome , novo_email, nova_senha, nova_fotoperfil, id_cad)

    cursor.execute(sql, val)

    conex.commit()

    print("Nome, email, senha e foto de perfil atualizadas com sucesso!", )
    conex.close()

