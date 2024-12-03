import conexao
import mysql.connector
from mysql.connector.errors import ProgrammingError
import mysql.connector
from datetime import datetime, timedelta

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
    
def recuperar_lembrete(id_cad):
    print(f"ID Cad:---{id_cad}---")

    now = datetime.now()

    # Conexão com o banco de dados
    try:
        conex = conexao.conectar()
        cursor = conex.cursor()
    except mysql.connector.Error as e:
        print(f"Erro ao conectar com o banco de dados: {e}")
        return {'erro': True, 'mensagem': f"Erro de conexão: {e}"}

    # SQL: Identificar tarefas com lembretes ativos
    sql = """
    SELECT ID_COMP, TITULO_COMP, DATE_FORMAT(DATA_COMP, '%Y-%m-%d') AS DATA_COMP,
           DATE_FORMAT(HORARIO_COMP, '%H:%i') AS HORARIO_COMP, DESCRICAO, IMPORTANTE, LEMBRETE
    FROM COMPROMISSOS 
    WHERE DATE_SUB(CONCAT(DATA_COMP, ' ', HORARIO_COMP), INTERVAL LEMBRETE MINUTE) <= NOW()
    AND CONCAT(DATA_COMP, ' ', HORARIO_COMP) >= NOW()
    AND ID_CAD = %s
    """
    
    # Execute a consulta
    try:
        cursor.execute(sql, (id_cad,))
        compromissos = cursor.fetchall()

        print("----consultaa", compromissos)

        # Formatação dos resultados
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

        print('Resultado Banco--', resultado)
        return {'erro': False, 'mensagem': resultado} if resultado else {'erro': False, 'mensagem': []}

    except mysql.connector.errors.ProgrammingError as e:
        print(f"Erro ao executar SQL (ProgrammingError): {e}")
        return {'erro': True, 'mensagem': f"Erro de consulta: {e}"}

    except Exception as e:
        print(f"Erro ao executar SQL: {e}")
        return {'erro': True, 'mensagem': f"Erro inesperado: {e}"}

    finally:
        if conex.is_connected():
            cursor.close()
            conex.close()
        else:
            print("Conexão já foi fechada.")
