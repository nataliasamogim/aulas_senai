import conexao
from update_banco import modificar_usuario
from delete_banco import deletar_cad

def selecionar_informacao_cad(id_cad):
   
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, NOME_USUARIO, EMAIL, SENHA, FOTO_PERFIL FROM CADASTRO WHERE ID_CAD = %s"
    val = (id_cad,)
    cursor.execute(sql, val)
    usuario = cursor.fetchone()
    conex.close()
    return usuario

    #if usuario:
        #print("Usuário encontrado:")
        #print(usuario)
        #novonome = input("Digite um novo nome:")
        #novoemail = input("Digite um novo email:")
        #novasenha = input("Digite uma nova senha:")
        #modificar_usuario(usuario[0], novonome, novoemail, novasenha, usuario[4])

        #deletar_cad(usuario[0])
        #return usuario
    #else:
       #print("Usuario não encontrado")  
        #return None
 

def verificar_informacao_log(email, senha):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID_CAD, EMAIL FROM CADASTRO WHERE EMAIL = %s AND SENHA = %s"
    val = (email, senha)
    cursor.execute(sql, val)
    login = cursor.fetchone()
    conex.close()

    if login:
        print("Usuário encontrado!")
        print(login)
        return login
    else:
        print("Usuario não encontrado")  
        return {'erro': True, 'mensagens': 'Usuário não encontrado'}
    
if __name__ == "__main__":
    id_cad = int(input("Digite o ID do cadastro que deseja selecionar:"))
    linha = []
    linha = selecionar_informacao_cad(id_cad)
    if linha:
        print("Usuário encontrado:")
        print(linha)
        novonome = input("Digite um novo nome:")
        novoemail = input("Digite um novo email:")
        novasenha = input("Digite uma nova senha:")
        modificar_usuario(linha[0], novonome, novoemail, novasenha, linha[4])
        print(selecionar_informacao_cad(linha[0]))
        deletar_cad(linha[0])
    else:
        print("Usuario não encontrado")  
    