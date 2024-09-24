# Nome do componente: validacoes.py
# Autor: Marília Martins Bellini 
# Data criação/alteração: 24/09/2024
# Descrição detalhada: esse componente valida os campos dos formulários (cadastro e login), 
# como nome, email, senha e confirmar senha, tendo validações como mínimo e máximo de caracteres,
# se o campo nome possui somente letras, se o campo emaile senha estão dentro das condições específicas
# e se o confirmar senha está igual ao campo senha.

import re
# Nome da função: validar_nome
# Autor: Marília Martins Bellini
# Data de criação/alteração: 24/09/2024
# Parâmetros de entrada: 
## Nome: nome, tipo: string, finalidade: validar se o nome está dentro das condições específicas
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar o email do usuário através da quantidade de caracteres, se há somente letras, 
# espaço e se não há mais de 3 letras repetidas
def validar_nome(nome):
   
    nome = nome.strip()

    if not nome:
        return {'erro': True, 'mensagem': 'O nome não pode estar vazio\n'}

    if len(nome) < 3:
        return {'erro': True, 'mensagem': 'O nome deve ter pelo menos 3 caracteres\n'}
    
    if len(nome) > 100:
        return {'erro': True, 'mensagem': 'O nome deve conter no máximo 100 caracteres\n'}
    
    if not re.match("^[a-zA-ZÀ-ÿ ]*$", nome):
        return {'erro': True, 'mensagem': 'O nome deve conter apenas letras \n'}

    if re.search(r"(.)\1{2,}", nome): 
        return {'erro': True, 'mensagem': 'O nome não pode conter letras repetidas três vezes ou mais\n'}

    if re.search(r'(\s[a-zA-ZÀ-ÿ]\s)+', nome):
        return {'erro': True, 'mensagem': 'Nome inválido \n'}

    return {'erro': False, 'mensagem': ''}

# Nome da função: validar_email
# Autora: Marília Martins Bellini
# Data de criação/alteração: 24/09/2024
# Parâmetros de entrada: 
## Nome: vemail, tipo: string, finalidade: validar se o email está dentro das condições específicas
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário.
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar o email do usuário utilizando uma estrutura padrão de email
import re

def validar_email(vemail):
    # Verifica se o e-mail está vazio
    if not vemail:
        return {'erro': True, 'mensagem': 'O campo de e-mail não pode ser vazio\n'}
    
    # Limites de comprimento
    if len(vemail) > 50:  # Tamanho máximo definido para e-mails
        return {'erro': True, 'mensagem': 'O e-mail deve ter no máximo 50 caracteres\n'}

    # Verifica se há letras maiúsculas
    if any(char.isupper() for char in vemail):
        return {'erro': True, 'mensagem': 'O e-mail não pode conter letras maiúsculas\n'}

    # Utilizando uma expressão regular para validar o formato do e-mail
    padrao_email = r'^[\w\.-]{4,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{3,}$'
    if not re.match(padrao_email, vemail):
        return {'erro': True, 'mensagem': 'E-mail inválido, exemplo: tointo@gmail.com\n'}

    return {'erro': False, 'mensagem': ''}


def validar_emailVazio(vemail):
    if vemail == '': 
        return {'erro': True, 'mensagem': 'O campo de email não pode ser vazio'}
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
        return {'erro': True, 'mensagem': 'O campo confirmar senha deve ser igual ao campo senha\n'}
    return {'erro': False, 'mensagem': ''}


# Nome da função: validar_senha
# Autora: Marilia Martins Bellini
# Data de criação/alteração: 24/09/2024
# Parâmetros de entrada: 
## Nome: senha, tipo: string, finalidade: validar se a senha está dentro das condições específicas.
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário.
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar se o campo senha possui no mínimo 8 e no máximo 15 caracteres, 
# se tem pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial, sendo proibido o uso de espaços
def validar_senha(vsenha):
    erros = []
    # Adicione suas próprias regras de validação para senha aqui
    # Por exemplo, garantir que a senha contenha pelo menos um caractere maiúsculo, um minúsculo, um número e um caractere especial
    if len(vsenha) < 8 or len(vsenha) > 15:
        erros.append('A senha deve ter entre 8 e 15 caracteres\n')
    if not any(c.isupper() for c in vsenha):
        erros.append('A senha deve conter um caractere maiúsculo\n')
    if not any(c.islower() for c in vsenha):
        erros.append('A senha deve conter um caractere minúsculo\n')
    if not any(c.isdigit() for c in vsenha):
        erros.append('A senha deve conter pelo menos um número\n')
    if not any(c in "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~" for c in vsenha):
        erros.append('A senha deve conter um caractere especial\n')
    if ' ' in vsenha:
        erros.append('A senha não deve conter espaços.\n')

    if erros:
        return {'erro': True, 'mensagem': erros}
    return {'erro': False, 'mensagem': ''}