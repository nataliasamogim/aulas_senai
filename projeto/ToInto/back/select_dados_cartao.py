import conexao

def select_dados_cartao(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE ID_CAD = %s"
    val_insert = (id_cad,)  # Passando os IDs corretos
    cursor.execute(sql, val_insert)
    dados_pag = cursor.fetchall()
    conex.close()

    if dados_pag:
        return {'erro': False, 'mensagem': dados_pag}
    return {'erro': True, 'mensagem': ''}



