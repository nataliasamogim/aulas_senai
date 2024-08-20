import conexao

def recuperar_inf_cart(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = 'SELECT ID_DADOS_PAG, TIPO_PAG, CPF, DATA_PAG, NUM_CARTAO, CVV, DATE_FORMAT(DATA_VENC,"%Y-%m-%d") as DATA_VENC, NOME_CARTAO FROM DADOS_PAG WHERE ID_CAD = %s order by ID_DADOS_PAG desc LIMIT 1'
    val = (id_cad,)
    cursor.execute(sql, val)
    cartao = cursor.fetchone()
    conex.close()
    print(cartao)

    if cartao:
        print('Compra do usuário Laura')
        return {'erro': False, 'mensagem': cartao}

    else:
        return {'erro': True, 'mensagens':{'erro': True, 'mensagem': 'Compra não encontrada'}}    
