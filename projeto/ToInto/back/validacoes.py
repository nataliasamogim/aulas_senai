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
def validar_nome(nome):
    if len(nome) < 3:
        return {'erro': True, 'mensagem': 'O nome deve ter pelo menos 3 caracteres'}
    if len(nome) > 100:
        return {'erro' : True, 'mensagem': 'O nome deve conter no máximo 100 caracteres'}
    if not re.match("^[a-zA-ZÀ-ÿ ]*$", nome):
        return {'erro': True, 'mensagem': 'O nome deve conter apenas letras'}

    return {'erro': False, 'mensagem': ''}

# Nome da função: validar_nome
# Autora: Maria Luiza
# Data de criação/alteração: 01/12/2023
# Parâmetros de entrada: 
## Nome: vemail, tipo: string, finalidade: validar se o email está dentro das condições específicas
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário.
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar o email do usuário utilizando uma estrutura padrão de email
def validar_email(vemail):
    # Utilizando uma expressão regular simples para validar o formato do e-mail
    padrao_email = r'^\S+@\S+\.\S+$'
    if not re.match(padrao_email, vemail):
        return {'erro': True, 'mensagem': 'E-mail inválido.'}
    return {'erro': False, 'mensagem': ''}


# Nome da função: confirmar_senha
# Autora: Maria Luiza
# Data de criação/alteração: 01/12/2023
# Parâmetros de entrada: 
## Nome: senha e confirmsenha, tipo: string, finalidade: validar se o confirmar senha está igual a senha
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário.
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar se o campo confirmar senha está igual ao campo senha.
def confirmar_senha(senha, confirmsenha):
    if confirmsenha != senha:
        return {'erro': True, 'mensagem': 'Esse campo deve ser igual ao campo senha'}
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
def validar_senha(vsenha):
    erros = []
    # Adicione suas próprias regras de validação para senha aqui
    # Por exemplo, garantir que a senha contenha pelo menos um caractere maiúsculo, um minúsculo, um número e um caractere especial
    if len(vsenha) < 8 or len(vsenha) > 15:
        erros.append('A senha deve ter entre 8 e 15 caracteres')
    if not any(c.isupper() for c in vsenha):
        erros.append("A senha deve conter um caractere maiúsculo\n")
    if not any(c.islower() for c in vsenha):
        erros.append('A senha deve conter um caractere minúsculo\n')
    if not any(c.isdigit() for c in vsenha):
        erros.append('A senha deve conter pelo menos um número\n')
    if not any(c in "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~" for c in vsenha):
        erros.append('A senha deve conter um caractere especial')

    if erros:
        return {'erro': True, 'mensagem': erros}
    return {'erro': False, 'mensagem': ''}