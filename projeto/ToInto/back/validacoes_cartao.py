import re 
from datetime import datetime

def validar_nome_titular(nome_titular):
    if len(nome_titular) < 1 or len(nome_titular) > 19:
        return {'erro': True, 'mensagem': 'O nome do titular não pode estar vazio e precisa ter no máximo 19 caracteres'}
    
    return {'erro': False, 'mensagem': ''}


def validar_cpf(cpf):
  #Retira apenas os dígitos do CPF, ignorando os caracteres especiais
  numeros = [int(digito) for digito in cpf if digito.isdigit()]
  
  formatacao = False
  quant_digitos = False
  validacao1 = False
  validacao2 = False

  #Verifica a estrutura do CPF (111.222.333-44)
  if re.match(r'^\d{3}\.\d{3}\.\d{3}-\d{2}$', cpf):
      formatacao = True

  if len(numeros) == 11:
      quant_digitos = True

      # Verifica se todos os números são iguais, como "111.111.111-11"
      if numeros == numeros[::-1]:  # Todos iguais
        return {'erro': True, 'mensagem': 'CPF inválido, todos os dígitos são iguais.'}
  
      soma_produtos = sum(a*b for a, b in zip (numeros[0:9], range (10, 1, -1)))
      digito_esperado = (soma_produtos *10 % 11) % 10
      if numeros[9] == digito_esperado:
          validacao1 = True

      soma_produtos1 = sum(a*b for a, b in zip(numeros [0:10], range (11, 1, -1)))
      digito_esperado1 = (soma_produtos1 *10 % 11) % 10
      if numeros[10] == digito_esperado1:
          validacao2 = True

      if quant_digitos == True and formatacao == True and validacao1 == True and validacao2 == True:
          return {'erro': False, 'mensagem': ''}
      else:
          return {'erro': True, 'mensagem': 'CPF inválido'}

  else:
      return {'erro': True, 'mensagem': 'O CPF precisa ter 11 digitos, pontos e traço'}
  
 
def validar_num_cartao(num_cartao):
        # Remove espaços em branco
        num_cartao = num_cartao.strip()

        # Verifica se a numero do cartão contém apenas dígitos
        if len(num_cartao) == 16 and num_cartao.isdigit():
            return {'erro': False, 'mensagem': ''}
        else:
            return {'erro': True, 'mensagem': 'O número do cartão precisa ter 16 dígitos'}
       

def validar_datavenc(datavenc):
    if not datavenc:  # Verifica se datavenc é uma string vazia
        return {'erro': True, 'mensagem': 'Data de vencimento não fornecida!'}

    # Formato esperado: DD/MM/AA
    data = datetime.strptime(datavenc, '%Y-%m-%d')

    # Verifica se a data é futura
    hoje = datetime.today()
    if data < hoje:
        return {'erro': True, 'mensagem': 'A data está vencida!'}
    else:
        return {'erro': False, 'mensagem': ''}
        
    
def validar_codseg(cod_seguranca):
    # Remove espaços em branco
    cod_seguranca = cod_seguranca.strip()

    # Verifica se o código de segurança contém apenas dígitos
    if len(cod_seguranca) == 3 and cod_seguranca.isdigit():
        return {'erro': False, 'mensagem': ''}
    else:
        return {'erro': True, 'mensagem': 'O código de segurança está incorreto!'}