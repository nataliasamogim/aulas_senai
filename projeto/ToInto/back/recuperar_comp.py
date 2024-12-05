# Nome do componente: recuperar_comp.py
# Autor: Maria Luiza 
# Data criação/alteração: 05-12-2024
# Descrição detalhada: esse componente recupera as informações das tabelas de compromissos, de acordo com o que utilizaremos no frontend.

import conexao
import mysql.connector
from mysql.connector.errors import ProgrammingError
from datetime import datetime, timedelta

def recuperar_inf_comp(id_cad, data_comp):
    conex = conexao.conectar()
    cursor = conex.cursor()

    # Define a consulta SQL para buscar compromissos de um usuário específico em uma data
    sql = 'SELECT ID_COMP, CHECKBOX, TITULO_COMP, DATE_FORMAT(HORARIO_COMP,"%H:%i")AS HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE FROM COMPROMISSOS WHERE ID_CAD = %s AND DATA_COMP = %s order by HORARIO_COMP '

    # Parâmetros da consulta
    val = (id_cad,data_comp)

    # Executa a consulta e armazena os resultados
    cursor.execute(sql, val)
    compromisso = cursor.fetchall()
    conex.close()

    # Retorna os resultados encontrados ou uma mensagem de erro
    if compromisso:
        return {'erro': False, 'mensagem': compromisso}

    else:
        return {'erro': True, 'mensagem': 'Compromisso não encontrado'}
    
def recuperar_inf_semana(id_cad, data_in, data_fim):
    conex = conexao.conectar()
    cursor = conex.cursor()

    # Consulta SQL: Busca compromissos dentro de um intervalo de datas
    sql = 'SELECT ID_COMP, CHECKBOX, TITULO_COMP, DATE_FORMAT(HORARIO_COMP,"%H:%i")AS HORARIO_COMP, DATE_FORMAT(DATA_COMP, "%Y-%m-%d") AS DATA_COMP, DESCRICAO, IMPORTANTE, LEMBRETE FROM COMPROMISSOS WHERE ID_CAD = %s AND DATA_COMP >= DATE_FORMAT(%s, "%Y-%m-%d") and DATA_COMP <= DATE_FORMAT(%s, "%Y-%m-%d") order by DATA_COMP, HORARIO_COMP'
    val = (id_cad,data_in, data_fim)

    # Executa a consulta e armazena os resultados
    cursor.execute(sql, val)
    compromisso = cursor.fetchall()
    conex.close()

    # Retorna os resultados encontrados ou uma mensagem de erro
    if compromisso:
        return {'erro': False, 'mensagem': compromisso}

    else:
        return {'erro': True, 'mensagem': 'Compromisso não encontrado'}
    
def recuperar_inf_importante(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    # Consulta SQL: Busca até 10 compromissos marcados como importantes e ainda válidos
    sql = 'SELECT ID_COMP, CHECKBOX, TITULO_COMP, DATE_FORMAT(HORARIO_COMP, "%H:%i") AS HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE, DATE_FORMAT(DATA_COMP, "%Y-%m-%d") AS DATA_COMP FROM COMPROMISSOS WHERE ID_CAD = %s AND IMPORTANTE = 1 AND DATA_COMP >= CURDATE() ORDER BY DATA_COMP, HORARIO_COMP LIMIT 10'
    val = (id_cad,)

    # Executa a consulta e armazena os resultados
    cursor.execute(sql, val)
    compromisso = cursor.fetchall()
    conex.close()

    # Retorna os compromissos importantes encontrados ou uma mensagem de erro
    if compromisso:
        return {'erro': False, 'mensagem': compromisso}
    else:
        return {'erro': True, 'mensagem': 'Compromisso não encontrado'}
    
def recuperar_lembrete(id_cad):
    print(f"ID Cad:---{id_cad}---")

    # Obtém a data/hora atual
    now = datetime.now()

    # Conexão com o banco de dados
    try:
        conex = conexao.conectar()
        cursor = conex.cursor()
    except mysql.connector.Error as e:
        # Retorna erro se não conseguir conectar ao banco
        return {'erro': True, 'mensagem': f"Erro de conexão: {e}"}

    # Consulta SQL:
    # Busca compromissos do usuário que possuem lembretes ativos
    # A lógica filtra compromissos onde:
    # - O horário atual está entre o início do lembrete e o início do compromisso
    sql = """
    SELECT ID_COMP, TITULO_COMP, DATE_FORMAT(DATA_COMP, '%Y-%m-%d') AS DATA_COMP,
           DATE_FORMAT(HORARIO_COMP, '%H:%i') AS HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE
    FROM COMPROMISSOS 
    WHERE DATE_SUB(CONCAT(DATA_COMP, ' ', HORARIO_COMP), INTERVAL LEMBRETE MINUTE) <= NOW()
    AND CONCAT(DATA_COMP, ' ', HORARIO_COMP) >= NOW()
    AND ID_CAD = %s
    """
    
    # Executa a consulta e armazena os resultados
    try:
        cursor.execute(sql, (id_cad,))
        compromissos = cursor.fetchall()

        # Formata os resultados em uma lista de dicionários para facilitar o uso no frontend
        resultado = []
        for row in compromissos:
            resultado.append({
                "id": row[0],
                "titulo": row[1],
                "data": row[2],
                "hora": row[3],
                "descricao": row[4],
                "importante": bool(row[5]),
                "lembrete": row[6],
            })

        # Retorna os resultados formatados ou uma lista vazia se nenhum lembrete for encontrado
        return {'erro': False, 'mensagem': resultado} if resultado else {'erro': False, 'mensagem': []}

    # Trata erros de programação SQL, como consultas malformadas
    except mysql.connector.errors.ProgrammingError as e:
        print(f"Erro ao executar SQL (ProgrammingError): {e}")
        return {'erro': True, 'mensagem': f"Erro de consulta: {e}"}

    # Trata outros erros inesperados
    except Exception as e:
        print(f"Erro ao executar SQL: {e}")
        return {'erro': True, 'mensagem': f"Erro inesperado: {e}"}

    # Fecha a conexão com o banco, se ela estiver aberta
    finally:
        if conex.is_connected():
            cursor.close()
            conex.close()
        else:
            print("Conexão já foi fechada.")
