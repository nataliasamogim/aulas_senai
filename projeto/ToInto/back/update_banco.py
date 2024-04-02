import conexao

# Função para atualizar os dados do usuário
def atualizar_cad(novos_dados):
    conex = conexao.conectar()
    cursor = conex.cursor()
    sql = f"UPDATE cadastro SET NOME_USUARIO = %s, EMAIL = %s, SENHA = %s WHERE ID_CAD = %s"
    val = (novos_dados)
    cursor.execute(sql, val)
    print('jjjjjjjj',sql, val)
    conex.commit()
    print("Dados alterados com sucesso")
    conex.close()
    return {'erro': False, 'mensagem': 'Alteração realizada com sucesso'}

 

