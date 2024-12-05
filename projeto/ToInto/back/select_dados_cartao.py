# Nome do componente: select_dados_cartao.py
# Autor: Maria Luiza 
# Data criação/alteração: 05-12-2024
# Descrição detalhada: esse componente recupera informações da tabela de dados de pagamento do banco de dados.

import conexao

# Função que realiza uma consulta no banco de dados para buscar informações relacionadas aos dados de pagamento de um usuário.
def select_dados_cartao(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    # Define a consulta SQL que será executada.
    # Aqui, busca-se o ID_DADOS_PAG na tabela DADOS_PAG onde o ID_CAD (identificador do cadastro) corresponde ao fornecido
    sql = "SELECT ID_DADOS_PAG FROM DADOS_PAG WHERE ID_CAD = %s"

    # Define os valores que serão usados como parâmetros na consulta. 
    # Neste caso, é passado um único valor, o 'id_cad', como uma tupla (por isso a vírgula após o valor)
    val_insert = (id_cad,)  # Passando os IDs corretos
    cursor.execute(sql, val_insert)

    # Obtém os resultados da consulta. fetchall() retorna todos os registros encontrados na forma de uma lista de tuplas
    dados_pag = cursor.fetchall()
    conex.close()

    # Verifica se algum dado foi retornado pela consulta
    if dados_pag:
        # Retorna um dicionário com 'erro' como False e 'mensagem' contendo os dados encontrados
        return {'erro': False, 'mensagem': dados_pag}
    # Caso nenhum dado seja encontrado, retorna um dicionário indicando um erro (True) e uma mensagem vazia
    return {'erro': True, 'mensagem': ''}



