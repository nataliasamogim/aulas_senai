# Nome do componente: consulta_data.py
# Autor: Maria Luiza 
# Data alteração: 03/12/2024
# Descrição detalhada: Essa função é útil para recuperar compromissos ou tarefas associadas a um usuário específico e apresenta um tratamento básico de erros caso nenhuma tarefa seja encontrada.

import conexao

def consultar_tarefas_por_usuario(user_id):
    # Define uma função que consulta as tarefas de um usuário específico com base no 'user_id'.
    print("ID banco----", user_id)
    conex = conexao.conectar()
    cursor = conex.cursor()

    # Consulta SQL para buscar as datas dos compromissos do usuário.
    sql = """
    SELECT DATA_COMP
    FROM COMPROMISSOS
    WHERE ID_CAD = %s
    """

    # Define os valores que serão passados para substituir o marcador '%s'. 
    # Neste caso, é uma tupla contendo apenas o 'user_id'.
    val = (user_id,)
    
    # Executa a consulta SQL usando o comando e os valores definidos acima.
    cursor.execute(sql, val)
    tarefas = cursor.fetchall()
    conex.close()
    print('Datas------------', tarefas)

    # Verifica se existem resultados na consulta.
    if tarefas:
        # Convertendo a lista de resultados para uma lista simples de datas
        return {'erro': False, 'dados': [tarefa[0] for tarefa in tarefas]}
    else:
        return {'erro': True, 'mensagem': 'Nenhuma tarefa encontrada'}