# Nome do componente: delete_banco.py
# Autor: Maria Luiza 
# Data alteração: 03/12/2024
# Descrição detalhada: Este código realiza exclusões nas tabelas de cadastro e compromissos, deletando a conta do usuário e os compromissos criados por ele.
import conexao

# Define uma função para deletar um registro na tabela CADASTRO, identificado por um id de cadastro.
def deletar_cad(cad_id):
    conex = conexao.conectar()
    cursor = conex.cursor()

    # Define o comando SQL para excluir um registro na tabela 'CADASTRO' onde o ID_CAD corresponde ao fornecido
    sql = "DELETE FROM CADASTRO WHERE ID_CAD = %s"
    # Define os valores que substituirão o marcador de posição. É uma tupla contendo o 'cad_id'.
    val = (cad_id,)
    # Executa o comando SQL com o valor fornecido.
    cursor.execute(sql, val)
    conex.commit()
    print("Usuário deletado com sucesso!")
    conex.close()
    # Retorna um JSON indicando que não há erro e uma mensagem confirmando a exclusão.
    return {'erro': False, 'mensagem': 'Deletado com sucesso'}


# Define uma função para deletar um registro na tabela COMPROMISSOS, identificado por um id.
def deletar_compromisso(comp_id):
    try:
        conex = conexao.conectar()
        cursor = conex.cursor()

        # Define o comando SQL para excluir um registro na tabela 'COMPROMISSOS' onde o ID_COMP corresponde ao fornecido.
        sql = "DELETE FROM COMPROMISSOS WHERE ID_COMP = %s"
        val = (comp_id,)  # Certifica de que `val` é uma tupla

        # Executa o comando SQL com o valor fornecido.
        cursor.execute(sql, val)
        conex.commit()

    # Captura qualquer erro que ocorrer durante a execução da operação.
    except Exception as e:
        print(f"Erro ao deletar compromisso: {e}")
        # Retorna um JSON indicando que ocorreu um erro e a mensagem detalhada
        return {'erro': True, 'mensagem': str(e)}
    finally:
        conex.close()
    # Retorna um JSON indicando que não há erro e uma mensagem confirmando a exclusão
    return {'erro': False, 'mensagem': 'Deletado com sucesso'}