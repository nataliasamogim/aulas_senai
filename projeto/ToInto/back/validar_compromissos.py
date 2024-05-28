def validar_titulo(titulo):
    if len(titulo) < 3:
        return {'erro': True, 'mensagem': 'O titulo deve ter pelo menos 3 caracteres'}
    if len(titulo) > 200:
        return {'erro' : True, 'mensagem': 'O nome deve conter no máximo 200 caracteres'}

    return {'erro': False, 'mensagem': ''}

def validar_descricao(desc):
    if len(desc) < 3:
        return {'erro': True, 'mensagem': 'O nome deve ter pelo menos 3 caracteres'}
    if len(desc) > 100:
        return {'erro' : True, 'mensagem': 'O nome deve conter no máximo 100 caracteres'}

    return {'erro': False, 'mensagem': ''}