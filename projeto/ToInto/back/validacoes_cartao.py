# Nome do componente: validacoes_cartao.py
# Autor: Maria Luiza 
# Data criação/alteração: 05-12-2024
# Descrição detalhada: esse componente valida os campos dos formulário de cartão, 
# como nome do titular, cpf, número de cartão, data de vencimento e código de segurança, tendo validações como mínimo e máximo de caracteres,
# se o campo nome está dentro da quantidade de caracteres, se o campo cpf esta dentro das condições específicas, 
# se o campo número de cartão contém apenas dígitos, se o campo data de vencimento 
# está no formato esperado e se o campo de CVV está dentro da quantidade de caracteres pedida.

import re 
from datetime import datetime

# Nome da função: validar_nome
# Autor: Maria Luiza
# Data de criação/alteração: 05-12-2024
# Parâmetros de entrada: 
## Nome: nome_titular, tipo: string, finalidade: validar se o nome do titular está dentro das condições específicas
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagens de erro para o usuário
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# Essa função tem a finalidade de validar o nome do titular do cartão através da quantidade de caracteres.
def validar_nome_titular(nome_titular):
    if len(nome_titular) < 1 or len(nome_titular) > 19:
        return {'erro': True, 'mensagem': 'O nome do titular não pode estar vazio e precisa ter no máximo 19 caracteres'}
    
    return {'erro': False, 'mensagem': ''}


# Nome da função: validar_cpf
# Autor: Maria Luiza
# Data de criação/alteração: 05-12-2024
# Parâmetros de entrada: 
## Nome: cpf, tipo: string, finalidade: validar se o CPF está dentro das condições específicas
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagem de erro de que o cpf está com todos os dígitos iguais
# 2° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro.
# 3° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagem de erro de que o cpf está inválido.
# 4° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagem de erro de que o cpf precisa ter 11 dígitos.
# Essa função tem a finalidade de validar o cpf do usuário através de validaões específicas de CPF.
def validar_cpf(cpf):
  #Retira apenas os dígitos do CPF, ignorando os caracteres especiais
  numeros = [int(digito) for digito in cpf if digito.isdigit()]
  
  quant_digitos = False
  validacao1 = False
  validacao2 = False

  if len(numeros) == 11:
      quant_digitos = True

      # Verifica se todos os números são iguais, como "111.111.111-11"
      if numeros == numeros[::-1]:  # Todos iguais
        return {'erro': True, 'mensagem': 'CPF inválido, todos os dígitos são iguais.'}
  
      soma_produtos = sum(a*b for a, b in zip(numeros [0:9], range (10, 1, -1)))
      digito_esperado = (soma_produtos *10 % 11) % 10
      if numeros[9] == digito_esperado:
          validacao1 = True

      soma_produtos1 = sum(a*b for a, b in zip(numeros [0:10], range (11, 1, -1)))
      digito_esperado1 = (soma_produtos1 *10 % 11) % 10
      if numeros[10] == digito_esperado1:
          validacao2 = True

      if quant_digitos == True and validacao1 == True and validacao2 == True:
          return {'erro': False, 'mensagem': ''}
      else:
          return {'erro': True, 'mensagem': 'CPF inválido'}

  else:
      return {'erro': True, 'mensagem': 'O CPF precisa ter 11 digitos'}
  

# Nome da função: validar_num_cartao
# Autor: Maria Luiza
# Data de criação/alteração: 05-12-2024
# Parâmetros de entrada: 
## Nome: num_cartao, tipo: string, finalidade: validar se o número de cartão contém apenas 16 dígitos e apenas dígitos.
# 1° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro. 
# 2° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagem de erro de quantidade de dígitos
# Essa função tem a finalidade de validar o número de cartão do usuário através de validaões de quantidade de dígitos.
def validar_num_cartao(num_cartao):
        # Remove espaços em branco
        num_cartao = num_cartao.replace(" ", "")

        # Verifica se a numero do cartão contém apenas dígitos e se tem 16 caracteres
        if len(num_cartao) == 16 and num_cartao.isdigit():
            return {'erro': False, 'mensagem': ''}
        else:
            return {'erro': True, 'mensagem': 'O número do cartão precisa ter 16 dígitos'}
       

# Nome da função: validar_datavenc
# Autor: Maria Luiza
# Data de criação/alteração: 05-12-2024
# Parâmetros de entrada: 
## Nome: datavenc, tipo: string, finalidade: validar se a data de vencimento está dentro das condições pedidas.
# 1° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagem de erro de data de vencimento não fornecida.
# 2° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagem de erro de data de vencimento no formato inválido.
# 3° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagem de erro de data de vencimento vencida.
# 4° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro. 
# Essa função tem a finalidade de validar a data de vencimento através de validaões de formato da data e se a data está vencida.
def validar_datavenc(datavenc):
    if not datavenc:  # Verifica se datavenc é uma string vazia
        return {'erro': True, 'mensagem': 'Data de vencimento não fornecida!'}

    # Formato esperado: MM/AA
    try:
        data = datetime.strptime(datavenc, '%m/%y')
    except ValueError:
        return {'erro': True, 'mensagem': 'Formato de data inválido. Use MM/AA.'}

    # Adiciona o dia primeiro para facilitar a comparação
    data = data.replace(day=1)

    # Verifica se a data é futura
    hoje = datetime.today().replace(day=1)
    if data < hoje:
        return {'erro': True, 'mensagem': 'A data está vencida!'}
    else:
        return {'erro': False, 'mensagem': ''}
        

# Nome da função: validar_codseg
# Autor: Maria Luiza
# Data de criação/alteração: 05-12-2024
# Parâmetros de entrada: 
## Nome: cod_seguranca, tipo: string, finalidade: validar se o CVV está dentro das condições pedidas.
# 1° Retorno:
## Nome: retorna vazio, tipo: boleano, finalidade: não retornar nada se não tiver erro. 
# 2° Retorno:
## Nome: retorna mensagens de erro, tipo: boleano, finalidade: retornar mensagem de erro de que o código de segurança está incorreto.
# Essa função tem a finalidade de validar o CVV através de validaões de espaços em branco, tamanho e apenas dígito.
def validar_codseg(cod_seguranca):
    # Remove espaços em branco
    cod_seguranca = cod_seguranca.strip()

    # Verifica se o código de segurança contém apenas dígitos
    if len(cod_seguranca) == 3 and cod_seguranca.isdigit():
        return {'erro': False, 'mensagem': ''}
    else:
        return {'erro': True, 'mensagem': 'O código de segurança está incorreto!'}