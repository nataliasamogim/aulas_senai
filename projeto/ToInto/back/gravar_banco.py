import conexao

def gravar_dados(dados_gravacao):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "INSERT INTO cadastro (NOME_USUARIO, EMAIL, SENHA) VALUES (%s, %s, %s)"

    cursor.execute(sql, dados_gravacao)
    conex.commit()
    print("Dados do cadastro inseridos com sucesso!") 
    conex.close()
