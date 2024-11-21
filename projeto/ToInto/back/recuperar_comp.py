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
    
def recuperar_inf_semana(id_cad, data_in, data_fim):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = 'SELECT ID_COMP, CHECKBOX, TITULO_COMP, DATE_FORMAT(HORARIO_COMP,"%H:%i")AS HORARIO_COMP, DATE_FORMAT(DATA_COMP, "%Y-%m-%d") AS DATA_COMP, DESCRICAO, IMPORTANTE, LEMBRETE FROM COMPROMISSOS WHERE ID_CAD = %s AND DATA_COMP >= DATE_FORMAT(%s, "%Y-%m-%d") and DATA_COMP <= DATE_FORMAT(%s, "%Y-%m-%d") order by DATA_COMP, HORARIO_COMP'
    val = (id_cad,data_in, data_fim)
    cursor.execute(sql, val)
    compromisso = cursor.fetchall()
    conex.close()
    print('banco',compromisso)

    if compromisso:
        return {'erro': False, 'mensagem': compromisso}

    else:
        return {'erro': True, 'mensagem': 'Compromisso não encontrado'}
    
def recuperar_inf_importante(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()
    sql = 'SELECT ID_COMP, CHECKBOX, TITULO_COMP, DATE_FORMAT(HORARIO_COMP, "%H:%i") AS HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE, DATE_FORMAT(DATA_COMP, "%Y-%m-%d") AS DATA_COMP FROM COMPROMISSOS WHERE ID_CAD = %s AND IMPORTANTE = 1 AND DATA_COMP >= CURDATE() ORDER BY DATA_COMP, HORARIO_COMP LIMIT 10'
    val = (id_cad,)  # Removido o segundo valor
    cursor.execute(sql, val)
    compromisso = cursor.fetchall()
    conex.close()
    print('banco', compromisso)

    if compromisso:
        return {'erro': False, 'mensagem': compromisso}
    else:
        return {'erro': True, 'mensagem': 'Compromisso não encontrado'}
