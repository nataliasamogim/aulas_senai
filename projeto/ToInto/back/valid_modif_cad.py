import re

def validar_nome(nome_novo):
    if len(nome_novo) < 3:
        return {'erro': True, 'mensagem': 'O nome deve ter pelo menos 3 caracteres'}
    if len(nome_novo) > 100:
        return {'erro' : True, 'mensagem': 'O nome deve conter no máximo 100 caracteres'}
    if not re.match("^[a-zA-ZÀ-ÿ ]*$", nome_novo):
        return {'erro': True, 'mensagem': 'O nome deve conter apenas letras'}

    return {'erro': False, 'mensagem': ''}


def validar_email(email_novo):
    # Utilizando uma expressão regular simples para validar o formato do e-mail
    padrao_email = r'^\S+@\S+\.\S+$'
    if not re.match(padrao_email, email_novo):
        return {'erro': True, 'mensagem': 'E-mail inválido, exemplo: tointo@gmail.com'}
    return {'erro': False, 'mensagem': ''}


def validar_senha(senha_nova):
    erros = []
    # Adicione suas próprias regras de validação para senha aqui
    # Por exemplo, garantir que a senha contenha pelo menos um caractere maiúsculo, um minúsculo, um número e um caractere especial
    if len(senha_nova) < 8 or len(senha_nova) > 15:
        erros.append(' - A senha deve ter entre 8 e 15 caracteres')
    if not any(c.isupper() for c in senha_nova):
        erros.append(" - A senha deve conter um caractere maiúsculo\n")
    if not any(c.islower() for c in senha_nova):
        erros.append(' - A senha deve conter um caractere minúsculo\n')
    if not any(c.isdigit() for c in senha_nova):
        erros.append(' - A senha deve conter pelo menos um número\n')
    if not any(c in "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~" for c in senha_nova):
        erros.append(' - A senha deve conter um caractere especial')

    if erros:
        return {'erro': True, 'mensagem': erros}
    return {'erro': False, 'mensagem': ''}