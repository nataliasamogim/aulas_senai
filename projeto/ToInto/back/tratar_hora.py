# Nome do componente: tratar_hora.py
# Autor: Maria Luiza 
# Data criação/alteração: 05-12-2024
# Descrição detalhada: esse componente define funções que retornam a data e a hora atual para ser usada na nossa aplicação.

import datetime # Importa o módulo 'datetime', que permite trabalhar com datas e horários no Python.

# Define uma função chamada 'data'.
def data(): 
    """
    Retorna a data atual no formato 'dd/mm/aaaa'.
    """
    # Obtém a data atual do sistema, sem a informação de horário.
    data_atual = datetime.date.today()
    # Formata a data no formato desejado e a retorna.
    return data_atual.strftime('%Y-%m-%d')

# Define uma função chamada 'hora'.
def hora():
    """
    Retorna o horário atual no formato 'hh:mm:ss'.
    """
    # Obtém o horário atual do sistema (incluindo data, mas aqui usamos apenas a hora).
    hora_atual = datetime.datetime.now().time()
    # Formata o horário no formato desejado e o retorna.
    return hora_atual.strftime('%H:%M:%S')



