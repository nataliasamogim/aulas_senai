import conexao

def deletar_cad(cad_id):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "DELETE FROM CADASTRO WHERE ID_CAD = %s"
    val = (cad_id,)
    cursor.execute(sql, val)
    conex.commit()
    print("Usuário deletado com sucesso!")
    conex.close()
    return {'erro': False, 'mensagem': 'Deletado com sucesso'}