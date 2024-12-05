# Nome do componente: recuperar_cad.py
# Autor: Maria Luiza
# Data de alteração: 05-12-2024
# Descrição detalhada: esse componente recupera as informações de cadastro do banco de dados 
import conexao

# Função para recuperar informações completas do usuário baseado no ID do cadastro.
def recuperar_inf_altercad(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, NOME_USUARIO, EMAIL FROM CADASTRO WHERE ID_CAD = %s"
    val = (id_cad,)
    cursor.execute(sql, val)
    usuario = cursor.fetchone() 
    conex.close()
    
    # Verifica se o registro foi encontrado.
    if usuario:
        print('dados recuperados MOBILE', usuario)
        # Retorna os dados do usuário com uma estrutura indicando sucesso.
        return {'erro': False, 'mensagem': usuario}

    else:
        # Caso nenhum registro seja encontrado, retorna uma mensagem de erro.
        return {'erro': True, 'mensagens': {'erro': True, 'mensagem': 'Usuário não encontrado'}}