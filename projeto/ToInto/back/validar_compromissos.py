# Nome do componente: validar_compromissos.py
# Autor: Maria Luiza 
# Data criação/alteração: 05-12-2024
# Descrição detalhada: esse componente valida o título e a descrição do formulário de compromissos.

# Função para validar o título de uma tarefa
def validar_titulo(titulo):
    # Verifica se o título tem menos de 3 caracteres
    if len(titulo) < 3:
        # Retorna um dicionário indicando erro (True) e uma mensagem explicando o motivo
        return {'erro': True, 'mensagem': {'titulo': 'O titulo deve ter pelo menos 3 caracteres'}}
    
    # Verifica se o título excede 20 caracteres
    if len(titulo) > 20:
        # Retorna um dicionário indicando erro (True) e uma mensagem explicando o motivo
        return {'erro' : True, 'mensagem': {'titulo': 'O titulo deve conter no máximo 20 caracteres'}}
    
    # Caso o título passe em todas as validações, retorna que não houve erro
    return {'erro': False, 'mensagem': ''}


# Função para validar a descrição de uma tarefa
def validar_descricao(desc):
    # Verifica se a descrição excede 70 caracteres
    if len(desc) > 70:
        # Retorna um dicionário indicando erro (True) e uma mensagem explicando o motivo
        return {'erro' : True, 'mensagem': {'descricao':'A descrição deve conter no máximo 70 caracteres'}}

    # Caso a descrição passe na validação, retorna que não houve erro
    return {'erro': False, 'mensagem': ''}
