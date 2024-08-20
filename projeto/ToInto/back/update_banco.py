import conexao

# Função para atualizar os dados do usuário

def atualizar_cad(novos_dados):
    print('teste dados:', novos_dados)
    conex = conexao.conectar()
    cursor = conex.cursor()
    sql = "UPDATE cadastro SET NOME_USUARIO = %s, EMAIL = %s, SENHA = %s, FOTO_PERFIL = %s WHERE ID_CAD = %s"
    val = (novos_dados)
    cursor.execute(sql, val)
    conex.commit()
    conex.close()
    return {'erro': False, 'mensagem': 'Alteração realizada com sucesso'}

def atualizar_cart(novos_dados):
    print('teste dados:', novos_dados)
    conex = conexao.conectar()
    cursor = conex.cursor()
    sql = "UPDATE dados_pag SET CPF = %s, NUM_CARTAO = %s, CVV = %s, DATA_VENC = %s, NOME_CARTAO = %s  WHERE ID_CAD = %s"
    val = (novos_dados)
    cursor.execute(sql, val)
    conex.commit()
    conex.close()
    return {'erro': False, 'mensagem': 'Alteração do dados de cartão realizada com sucesso'}

