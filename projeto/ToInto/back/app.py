# Nome do componente: app.py
# Autor: Maria Luiza 
# Data criação/alteração: 01/12/2023
# Descrição detalhada: esse componente importa o flask, flask_cors e a função processar_dados do processamento.py, 
# além de printar no terminal as mensagens de erro que estão dentro da função processar_dados.

from flask import Flask, request, jsonify
from flask_cors import CORS
from processamento import processar_dados  # Importe a função processar_dados

app = Flask(__name__)
CORS(app)  # Permita solicitações CORS

@app.route('/receber-dados', methods=['POST'])
def receber_dados():
    dados = request.json
    ret = processar_dados(dados)  # Chame a função processar_dados

    
    print('************************************************************************\n')
    print(ret)
    print('************************************************************************\n')
    return jsonify(ret)


if __name__ == '__main__':
    app.run(debug=True)