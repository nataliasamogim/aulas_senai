import conexao

def gravar_dados_compra(id_cad, id_dados_pag, plano_esc):
    conex = conexao.conectar()
    cursor = conex.cursor()

    if plano_esc == 1:
        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('3', NULL, %s, 'Comprou o Plano Grátis', 0.00)"
        cursor.execute(sql, (id_cad,))  # Corrigido para uma tupla de um único valor
        print("Compra Grátis realizada com sucesso") 
        conex.commit()
    
    elif plano_esc == 2:
        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('2', %s, %s, 'Comprou o Plano Mensal', 7.90)"
        val = (id_dados_pag, id_cad)  # Certifique-se de que `val` seja uma tupla
        cursor.execute(sql, val)
        print("Compra Mensal realizada com sucesso") 
        conex.commit()
    
    else:
        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('1', %s, %s, 'Comprou o Plano Anual', 109.90)"
        val = (id_dados_pag, id_cad)  # Certifique-se de que `val` seja uma tupla
        cursor.execute(sql, val)
        print('valores', val)
        print("Compra Anual realizada com sucesso") 
        conex.commit()
        
    conex.close()
    return {'erro': False, 'mensagem': 'Compra realizada com sucesso!'}
