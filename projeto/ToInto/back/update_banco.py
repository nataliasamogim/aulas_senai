import conexao

# Função para atualizar os dados do usuário

def atualizar_cad(novos_dados):
    print('teste dados:', novos_dados)
    conex = conexao.conectar()
    cursor = conex.cursor()
    sql = "UPDATE cadastro SET NOME_USUARIO = %s, EMAIL = %s, SENHA = %s, FOTO_PERFIL = %s WHERE ID_CAD = %s"
    val = (novos_dados)
    cursor.execute(sql, val)
    conex.commit()
    conex.close()
    return {'erro': False, 'mensagem': 'Alteração realizada com sucesso'}

def atualizar_cart(novos_dados):
    print('teste dados:', novos_dados)
    conex = conexao.conectar()
    cursor = conex.cursor()
    sql = "UPDATE dados_pag SET CPF = %s, NUM_CARTAO = %s, CVV = %s, DATA_VENC = %s, NOME_CARTAO = %s  WHERE ID_CAD = %s"
    val = (novos_dados)
    cursor.execute(sql, val)
    conex.commit()
    conex.close()
    return {'erro': False, 'mensagem': 'Alteração do dados de cartão realizada com sucesso'}

def atualizar_compromisso(novos_dados):
    print('teste dados:', novos_dados)
    
    # Conexão com o banco de dados
    conex = conexao.conectar()
    cursor = conex.cursor()
    print ('dados do horario:', novos_dados[4])
    
    # Comando SQL para atualização
    sql = """
        UPDATE COMPROMISSOS 
        SET TITULO_COMP = %s, HORARIO_COMP = %s, DESCRICAO = %s, IMPORTANTE = %s, LEMBRETE = %s 
        WHERE ID_COMP = %s AND ID_CAD = %s
    """
    
    # Desempacotando os valores em vez de passar a lista diretamente
    val = (
        novos_dados[2],  # Título
        novos_dados[4],  # Horário
        novos_dados[5],  # Descrição
        novos_dados[6],  # Importante
        novos_dados[7],  # Lembrete
        novos_dados[1],  # ID_COMP (ID da tarefa)
        novos_dados[0]   # ID_CAD (ID do cadastro)
    )
    
    # Executando o comando SQL com os valores corretos
    cursor.execute(sql, val)
    conex.commit()
    
    # Fechando a conexão com o banco de dados
    conex.close()
    
    return {'erro': False, 'mensagem': 'Alteração dos dados do compromisso realizada com sucesso'}


