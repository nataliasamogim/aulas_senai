# Nome do componente: modificar_plano.py
# Autor: Maria Luiza 
# Data alteração: 03/12/2024
# Descrição detalhada: Este código realiza a inserção das informações na tabela compras de acordo com o plano escolhido pelo usuário

import conexao

# Função para gravar dados de compra no banco de dados.
# Recebe os parâmetros: 
# - `id_cad` (ID do cadastro do usuário),
# - `id_dados_pag` (ID dos dados de pagamento, pode ser `None` para plano grátis),
# - `plano_esc` (identificador do plano escolhido: 1 = Grátis, 2 = Mensal, 3 = Anual).
def gravar_dados_compra(id_cad, id_dados_pag, plano_esc):
    conex = conexao.conectar()
    cursor = conex.cursor()

     # Verifica se o plano escolhido é o Plano Grátis (plano_esc == 1).
    if plano_esc == 1:
        # Comando para inserir a compra do Plano Grátis na tabela `compras`.
        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('3', NULL, %s, 'Comprou o Plano Grátis', 0.00)"
        cursor.execute(sql, (id_cad,))  # Corrigido para uma tupla de um único valor
        print("Compra Grátis realizada com sucesso") 
        conex.commit()
    
    # Verifica se o plano escolhido é o Plano Mensal (plano_esc == 2).
    elif plano_esc == 2:
        # Comando para inserir a compra do Plano Mensal na tabela `compras`.
        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('2', %s, %s, 'Comprou o Plano Mensal', 7.90)"
        val = (id_dados_pag, id_cad)  # Certifique-se de que `val` seja uma tupla
        cursor.execute(sql, val)
        print("Compra Mensal realizada com sucesso") 
        conex.commit()
    
    # Caso nenhuma das condições anteriores seja atendida, assume-se que é o Plano Anual.
    else:
        # Comando para inserir a compra do Plano Anual na tabela `compras`.
        sql = "INSERT INTO compras (ID_PLANO, ID_DADOS_PAG, ID_CAD, DESC_COMPRA, VALOR_COMPRA) VALUES ('1', %s, %s, 'Comprou o Plano Anual', 109.90)"
        val = (id_dados_pag, id_cad)  # Certifique-se de que `val` seja uma tupla
        cursor.execute(sql, val)
        print('valores', val)
        print("Compra Anual realizada com sucesso") 
        conex.commit() # Salva as alterações no banco de dados.
        
    # Fecha a conexão com o banco de dados
    conex.close()
    return {'erro': False, 'mensagem': 'Compra realizada com sucesso!'}
