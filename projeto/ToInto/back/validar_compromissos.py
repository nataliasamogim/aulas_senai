def validar_titulo(titulo):
    if len(titulo) < 3:
        return {'erro': True, 'mensagem': 'O titulo deve ter pelo menos 3 caracteres'}
    if len(titulo) > 35:
        return {'erro' : True, 'mensagem': 'O titulo deve conter no máximo 35 caracteres'}

    return {'erro': False, 'mensagem': ''}

def validar_descricao(desc):
    if len(desc) > 70:
        return {'erro' : True, 'mensagem': 'A descrição deve conter no máximo 150 caracteres'}

    return {'erro': False, 'mensagem': ''}
