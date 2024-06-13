import datetime

# Define uma função chamada 'data'.
def data():
    """
    Retorna a data atual no formato 'dd/mm/aaaa'.
    """
    # Obtém a data atual.
    data_atual = datetime.date.today()
    # Formata a data no formato desejado e a retorna.
    return data_atual.strftime('%Y-%m-%d')

# Define uma função chamada 'hora'.
def hora():
    """
    Retorna o horário atual no formato 'hh:mm:ss'.
    """
    # Obtém o horário atual.
    hora_atual = datetime.datetime.now().time()
    # Formata o horário no formato desejado e o retorna.
    return hora_atual.strftime('%H:%M:%S')



