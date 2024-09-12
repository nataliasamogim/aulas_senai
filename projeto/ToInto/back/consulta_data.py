import conexao

def consultar_tarefas_por_usuario(user_id):
    print("ID banco----", user_id)
    conex = conexao.conectar()
    cursor = conex.cursor()

    # Consulta para buscar compromissos ou tarefas por usuário
    sql = """
    SELECT DATA_COMP
    FROM COMPROMISSOS
    WHERE ID_CAD = %s
    """
    val = (user_id,)
    cursor.execute(sql, val)
    tarefas = cursor.fetchall()
    conex.close()
    print('Datas------------', tarefas)

    if tarefas:
        # Convertendo a lista de resultados para uma lista simples de datas
        return {'erro': False, 'dados': [tarefa[0] for tarefa in tarefas]}
    else:
        return {'erro': True, 'mensagem': 'Nenhuma tarefa encontrada'}