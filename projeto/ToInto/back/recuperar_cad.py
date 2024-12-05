# Nome do componente: recuperar_cad.py
# Autor: Maria Luiza
# Data de alteração: 05-12-2024
# Descrição detalhada: esse componente recupera as informações de cadastro do banco de dados 
import conexao

# Função para recuperar informações completas do usuário baseado no ID do cadastro.
def recuperar_inf_formani(id_cad):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, NOME_USUARIO, EMAIL, FOTO_PERFIL FROM CADASTRO WHERE ID_CAD = %s"
    val = (id_cad,)
    cursor.execute(sql, val)
    usuario = cursor.fetchone() 
    conex.close()
    
    # Verifica se o registro foi encontrado.
    if usuario:
        # Desempacota os valores retornados da query.
        id_cad, nome_usuario, email, foto_perfil = usuario
        
        # Converter a foto para Base64, se existir
        # Isso é útil para exibir imagens no frontend.
        foto_base64 = foto_perfil.decode('utf-8') if foto_perfil else None
        #foto_base64 = foto_perfil
        print('foto',foto_base64)

        # Monta um dicionário contendo os dados do usuário.
        dados_usuario = {
            'id': id_cad,
            'nome': nome_usuario,
            'email': email,
            'foto_perfil': foto_base64 # Inclui a foto convertida, se existir.
        }

        # Retorna os dados do usuário com uma estrutura indicando sucesso.
        return {'erro': False, 'mensagem': dados_usuario}

    else:
        # Caso nenhum registro seja encontrado, retorna uma mensagem de erro.
        return {'erro': True, 'mensagens': {'erro': True, 'mensagem': 'Usuário não encontrado'}}

# Função para verificar as informações de login do usuário.
def verificar_informacao_log(email, senha):
    conex = conexao.conectar()
    cursor = conex.cursor()

     # Query SQL que verifica o login do usuário e obtém informações relacionadas a compras e planos.
    sql = """SELECT compras.id_compra, cadastro.ID_CAD, NOME_USUARIO, EMAIL, compras.ID_PLANO as plano FROM CADASTRO JOIN compras ON cadastro.id_cad = compras.id_cad WHERE cadastro.EMAIL = %s AND cadastro.SENHA = %s order by compras.id_compra DESC limit 1;"""
    val = (email, senha)
    cursor.execute(sql, val)
    login = cursor.fetchone() # Recupera o primeiro registro correspondente.

    print(f"Resultado da consulta: {login}")  # Verificar o valor retornado

    conex.close()

    # Verifica se o registro contém dados válidos.
    if login and any(login):  # A condição `any(login)` verifica se ao menos um campo não é `None`.
        print('Login recuperado:', login)
        return {'erro': False, 'mensagem': login} # Retorna o registro do login com uma estrutura de sucesso.
    else:
        print("Usuário não encontrado")
        return {'erro': True, 'mensagens': {'erro': True, 'mensagem': 'Usuário não encontrado'}} # Caso nenhum registro seja encontrado ou os dados sejam inválidos, retorna um erro.



    
    


