def validar_titulo(titulo):
    if len(titulo) < 3:
        return {'erro': True, 'mensagem': {'titulo': 'O titulo deve ter pelo menos 3 caracteres'}}
    if len(titulo) > 20:
        return {'erro' : True, 'mensagem': {'titulo': 'O titulo deve conter no máximo 20 caracteres'}}

    return {'erro': False, 'mensagem': ''}

def validar_descricao(desc):
    if len(desc) > 70:
        return {'erro' : True, 'mensagem': {'descricao':'A descrição deve conter no máximo 70 caracteres'}}

    return {'erro': False, 'mensagem': ''}
