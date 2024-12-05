# Nome do componente: conexao.py
# Autor: Maria Luiza 
# Data alteração: 03/12/2024
# Descrição detalhada: Este código configura uma função que conecta um aplicativo Python ao banco de dados MySQL.

import mysql.connector # Importa o módulo mysql.connector para estabelecer conexão com o banco de dados MySQL.

def conectar():
    # Define uma função chamada 'conectar', que cria e retorna uma conexão com o banco de dados.
    return mysql.connector.connect(
        host="localhost", # O endereço do servidor do banco de dados. 'localhost' significa que o banco está rodando localmente.
        user="root", # 'root' é o padrão para o MySQL.
        password="",
        database="tointo" # O nome do banco de dados ao qual a conexão será feita.
    )
