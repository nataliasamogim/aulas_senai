# Nome do componente: recuperar_cart.py
# Autor: Maria Luiza
# Data de alteração: 05-12-2024
# Descrição detalhada: esse componente recupera as informações de dados de cartão do banco de dados.
import conexao

# Função para recuperar informações do cartão de pagamento com base no ID do cadastro.
def recuperar_inf_cart(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    # Query SQL para selecionar os dados do cartão mais recente associado ao usuário
    sql = 'SELECT ID_DADOS_PAG, TIPO_PAG, CPF, DATA_PAG, NUM_CARTAO, CVV, DATA_VENC, NOME_CARTAO FROM DADOS_PAG WHERE ID_CAD = %s order by ID_DADOS_PAG desc LIMIT 1'
    val = (id_cad,)
    cursor.execute(sql, val)
    cartao = cursor.fetchone() # Recupera o registro mais recente (limitado a 1) correspondente.
    conex.close()
    print(cartao)

    # Verifica se os dados do cartão foram encontrados.
    if cartao:
        # Se encontrado, retorna os dados em uma estrutura indicando sucesso.
        return {'erro': False, 'mensagem': cartao}

    else:
        # Caso contrário, retorna uma mensagem de erro indicando que os dados não foram encontrados.
        return {'erro': True, 'mensagens':{'erro': True, 'mensagem': 'Dados do cartão não encontrado'}}    
