# Nome do componente: validacoes.py
# Autor: Maria Luiza 
# Data criação/alteração: 01/12/2023
# Descrição detalhada: esse componente valida os campos dos formulários (cadastro e login), 
# como nome, email, senha e confirmar senha, tendo validações como mínimo e máximo de caracteres,
# se o campo nome possui somente letras, se o campo emaile senha estão dentro das condições específicas
# e se o confirmar senha está igual ao campo senha.

import re
# Nome da função: validar_nome
# Autor: Maria Luiza
# Data de criação/alteração: 01/12/2023
# Parâmetros de entrada: 
## Nome: nome, tipo: string, finalidade: validar se o nome está dentro das condições específicas
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar o email do usuário através da quantidade de caracteres, se há somente letras e espaço.
def validar_novo_nome(vnome):
    if len(vnome) < 3:
        return {'erro': True, 'mensagem': 'O nome deve ter pelo menos 3 caracteres'}
    if len(vnome) > 100:
        return {'erro' : True, 'mensagem': 'O nome deve conter no máximo 100 caracteres'}
    if not re.match("^[a-zA-ZÀ-ÿ ]*$", vnome):
        return {'erro': True, 'mensagem': 'O nome deve conter apenas letras'}

    return {'erro': False, 'mensagem': ''}

# Nome da função: validar_email
# Autora: Maria Luiza
# Data de criação/alteração: 01/12/2023
# Parâmetros de entrada: 
## Nome: vemail, tipo: string, finalidade: validar se o email está dentro das condições específicas
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário.
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar o email do usuário utilizando uma estrutura padrão de email
def validar_novo_email(email):
    # Utilizando uma expressão regular simples para validar o formato do e-mail
    if email == None:
        return {'erro': True, 'mensagem': 'E-mail inválido, exemplo: tointo@gmail.com'}
    return {'erro': False, 'mensagem': ''}


# Nome da função: validar_senha
# Autora: Maria Luiza
# Data de criação/alteração: 01/12/2023
# Parâmetros de entrada: 
## Nome: senha, tipo: string, finalidade: validar se a senha está dentro das condições específicas.
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário.
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar se o campo senha possui no mínimo 8 e no máximo 15 caracteres, 
# se tem pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.
def validar_nova_senha(senha):
    if senha == None:
        return {'erro': True, 'mensagem': 'Senha inválida'}
    return {'erro': False, 'mensagem': ''}
