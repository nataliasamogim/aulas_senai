# Importa o módulo datetime, que fornece classes para manipulação de datas e horas.
import datetime

# Define uma função chamada 'data'.
def data():
    """
    Retorna a data atual no formato 'dd/mm/aaaa'.
    """
    # Obtém a data atual.
    data_atual = datetime.date.today()
    # Formata a data no formato desejado e a retorna.
    return data_atual.strftime('%d/%m/%Y')

# Define uma função chamada 'hora'.
def hora():
    """
    Retorna o horário atual no formato 'hh:mm:ss'.
    """
    # Obtém o horário atual.
    hora_atual = datetime.datetime.now().time()
    # Formata o horário no formato desejado e o retorna.
    return hora_atual.strftime('%H:%M:%S')

# Verifica se este arquivo está sendo executado diretamente.
if __name__ == "__main__":
    # Imprime a data atual usando a função 'data()'.
    print("Testando a função 'data()':", data())
    # Imprime o horário atual usando a função 'hora()'.
    print("Testando a função 'hora()':", hora())
