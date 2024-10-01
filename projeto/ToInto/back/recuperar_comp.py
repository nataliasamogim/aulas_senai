import conexao

def recuperar_inf_comp(id_cad, data_comp):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = 'SELECT ID_COMP, CHECKBOX, TITULO_COMP, DATE_FORMAT(HORARIO_COMP,"%H:%i")AS HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE FROM COMPROMISSOS WHERE ID_CAD = %s AND DATA_COMP = %s order by HORARIO_COMP '
    val = (id_cad,data_comp)
    cursor.execute(sql, val)
    compromisso = cursor.fetchall()
    conex.close()
    print('banco',compromisso)

    if compromisso:
        return {'erro': False, 'mensagem': compromisso}

    else:
        return {'erro': True, 'mensagem': 'Compromisso não encontrado'}