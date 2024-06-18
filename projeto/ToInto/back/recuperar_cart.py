import conexao

def recuperar_inf_cart(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_DADOS_PAG, TIPO_PAG, CPF, DATA_PAG, NUM_CARTAO, CVV, DATA_VENC, NOME_CARTAO FROM DADOS_PAG WHERE ID_CAD = %s"
    val = (id_cad,)
    print(id_cad)
    cursor.execute(sql, val)
    cartao = cursor.fetchone()
    conex.close()

    if cartao:
        print('Compra do usuário Laura')
        return {'erro': False, 'mensagem': cartao}

    else:
        return {'erro': True, 'mensagens':{'erro': True, 'mensagem': 'Compra não encontrada'}}    
