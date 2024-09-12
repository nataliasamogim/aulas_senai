import conexao

def deletar_cad(cad_id):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "DELETE FROM CADASTRO WHERE ID_CAD = %s"
    val = (cad_id,)
    cursor.execute(sql, val)
    conex.commit()
    print("Usuário deletado com sucesso!")
    conex.close()
    return {'erro': False, 'mensagem': 'Deletado com sucesso'}

def deletar_compromisso(comp_id):
    try:
        conex = conexao.conectar()
        cursor = conex.cursor()

        sql = "DELETE FROM COMPROMISSOS WHERE ID_COMP = %s"
        val = (comp_id,)  # Certifique-se de que `val` é uma tupla
        cursor.execute(sql, val)
        conex.commit()
    except Exception as e:
        print(f"Erro ao deletar compromisso: {e}")
        return {'erro': True, 'mensagem': str(e)}
    finally:
        conex.close()
    return {'erro': False, 'mensagem': 'Deletado com sucesso'}